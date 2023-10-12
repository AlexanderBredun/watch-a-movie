import type { iCategoryItem } from './common';
import type { tItemPreviewRaw } from './ItemPreview';


export interface tPreviewsExtracted {
    items: iCategoryItem[];
    total: number;
    totalPages: number;
}
export interface tPreviewsRaw {
    total:      number;
    totalPages: number;
    items: Array<tItemPreviewRaw>
}