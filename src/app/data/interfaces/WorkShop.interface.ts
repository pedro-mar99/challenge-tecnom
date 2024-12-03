export interface WorkShop {
    active: boolean;
    address: Address;
    amount_per_shift: number | null;
    area_code: string | null;
    country_code: string;
    created_at: string;
    default_address: string | null;
    default_formatted_address: string | null;
    email: string;
    email2: string | null;
    externals: Record<string, any>;
    externals_crm: Record<string, any>;
    formatted_address: string;
    group: string | null;
    id: number;
    make_code: string | null;
    maximum_per_day: number | null;
    minimum_anticipation_days: number | null;
    name: string;
    phone: string | null;
    phone2: string | null;
    phone3: string | null;
    relationships: any[];
    removed_at: string | null;
    resource_type: string | null;
    schedules: any[];
    social_facebook: string | null;
    social_linked_in: string | null;
    social_twitter: string | null;
    time_per_shift: string | null;
    type: string;
    updated_at: string;
    website: string | null;
    zone_information: string;
  }
  
  export interface Address {
    address_components: AddressComponent[];
    adr_address: string;
    formatted_address: string;
    geometry: Geometry;
    icon: string;
    icon_background_color: string;
    icon_mask_base_uri: string;
    name: string;
    place_id: string;
    reference: string;
    types: string[];
    url: string;
    vicinity: string;
    html_attributions: any[];
    utc_offset_minutes: number;
  }
  
  export interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
  }
  
  export interface Geometry {
    location: Location;
    viewport: Viewport;
  }
  
  export interface Location {
    lat: number;
    lng: number;
  }
  
  export interface Viewport {
    south: number;
    west: number;
    north: number;
    east: number;
  }