export interface Dynapi {
}


export interface Business {
    id: number;
    material_cost: number;
    material_currency: number;
    material_name: string;
    material_quantity_type: number;
}

export interface MaterialFull {
    id: number;
    material_name: string;
    material_cost: number;
    cost_converted: number;
    material_currency: number;
    material_quantity_type: number;
    currency_name: string
    currency_iso: string
    currency_symbol: string
    usd_conversion: number
    type_name: string 
}

export interface Material_NoID {
    material_cost: number;
    material_currency: number;
    material_name: string;
    material_quantity_type: number;
}