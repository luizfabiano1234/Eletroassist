export type ActiveTab='chat'|'calculators'|'materials_budget'|'checklists'|'study_notes';
export interface SavedNote { id:string; date:string; title:string; category:string; content:string }
export interface MaterialItem { id:string; name:string; specs:string; quantity:number; unit:string; estimatedUnitPrice:number; category:string }
export interface ChecklistItem { id:string; title:string; normReference:string; notes?:string; completed:boolean; category:string }
