import type { Hotspot, LocalizedModalContent } from '../../models/content.model';

export interface GridHotspotOptions {
  /** Prefix for hotspot ids, e.g. 't1' -> 't1-h01' */
  prefix: string;
  /** Grid columns; default ceil(sqrt(count)) */
  cols?: number;
  /** Horizontal padding from each edge (%) */
  paddingX?: number;
  /** Vertical padding from top/bottom (%) */
  paddingY?: number;
  /** Hotspot width (%) */
  hotspotWidth?: number;
  /** Hotspot height (%) */
  hotspotHeight?: number;
}

/**
 * Places chronicles on a padded grid so each has a clickable hotspot.
 * x/y are the center of the cell; width/height size the clickable area.
 *
 * A chronicle can override its position/size by setting `hotspot` in its content
 * file (see `HotspotPlacement`); when present, that overrides the grid layout.
 */
export function buildGridHotspots(
  chronicles: LocalizedModalContent[],
  opts: GridHotspotOptions,
): Hotspot[] {
  const count = chronicles.length;
  if (count === 0) return [];

  const paddingX = opts.paddingX ?? 6;
  const paddingY = opts.paddingY ?? 8;
  const hotspotWidth = opts.hotspotWidth ?? 4;
  const hotspotHeight = opts.hotspotHeight ?? 4;
  const cols = opts.cols ?? Math.ceil(Math.sqrt(count));
  const rows = Math.ceil(count / cols);

  const usableW = 100 - 2 * paddingX;
  const usableH = 100 - 2 * paddingY;
  const cellW = usableW / cols;
  const cellH = usableH / rows;

  return chronicles.map((modalContent, index) => {
    const col = index % cols;
    const row = Math.floor(index / cols);
    const gridX = paddingX + cellW * (col + 0.5);
    const gridY = paddingY + cellH * (row + 0.5);
    const num = String(index + 1).padStart(2, '0');

    // Per-chronicle override from the content file, if provided.
    const override = modalContent.hotspot;
    const x = override ? override.x : gridX;
    const y = override ? override.y : gridY;

    return {
      id: `${opts.prefix}-h${num}`,
      x: Math.round(x * 100) / 100,
      y: Math.round(y * 100) / 100,
      width: override?.width ?? hotspotWidth,
      height: override?.height ?? hotspotHeight,
      modalContent,
    };
  });
}
