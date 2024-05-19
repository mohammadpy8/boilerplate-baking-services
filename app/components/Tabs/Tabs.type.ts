export interface ITabs {
    items: string []
    active: number;
    onChange: (_: any, value: any) => void
}