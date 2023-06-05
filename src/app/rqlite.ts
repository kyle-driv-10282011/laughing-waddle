export interface list_material {
id: number;
material_name: string;
material_cost: number;
material_currency: number;
material_quantity_type: number;
}

export interface list_currency {
id: number;
currency_name: string;
currency_iso: string;
currency_symbol: string;
usd_conversion: number;
}

export interface list_quantity_type {
id: number;
type_name: string;
}

export interface list_quality_type {
id: number;
type_name: string;
}

export interface list_product {
id: number;
type_name: string;
}

export interface list_product_gate {
id: number;
gate_name: string;
gate_weight: number;
}

export interface list_business_type {
id: number;
type_name: string;
}

export interface list_business {
id: number;
business_name: string;
business_type: number;
}

export interface struct_data_rqlite {
		database: {
			name: string;
			tables: {
				name: string;
				columns: {
					name: string;
					type: string;
					null: string;
					primarykey: boolean;
				}[];
			}[];
		};
	}
	
export interface struct_response_rqlite {
results: {
	columns: string[];
	types: string[];
	values: any[][];
}[];
}