export type dropdownitemsType = {
  key: string;
  label: string;
}[];

export type partiesType = Array<{
    name: string;
    birthDate?: string;
    sharesCount?: number;
    gross?: number;
    identity: {
      id: string;
      type: string;
    };
    relation: {
      id: number;
      name: string;
    };
    nationality?: {
      id: string;
      name: string;
    };
}>;

export type activitiesType = {
    description?: string;
    isic?: Array<{
      id: string;
      name: string;
      nameEn?: any;
    }>;
}

export type API_dataType = {
  crName: string;
  crNumber: string;
  crEntityNumber?: string;
  issueDate: string;
  expiryDate: string;
  crMainNumber?: string;
  crMainEntityNumber?: string;
  parties: partiesType;
  businessType: {
    id: string;
    name: string;
  };
  fiscalYear?: {
    month: number;
    day: number;
    calendarType: {
      id: number;
      name: string;
    };
  };
  status: {
    id: string;
    name: string;
    nameEn?: string;
  };
  cancellation?: {
    date: string;
    reason: string;
  };
  address: {
    general: {
      website?: string;
      address: string;
      email?: string;
      fax1?: string;
      fax2?: string;
      telephone1?: string;
      telephone2?: string;
      postalBox1?: string;
      postalBox2?: string;
    };
    national?: {
      buildingNumber?: string;
      additionalNumber?: string;
      streetName?: string;
      city?: string;
      zipCode?: string;
      unitNumber?: string;
      district?: {
        id: number;
        name: string;
      };
    };
  };
  isEcommerce?: boolean;
  urls?: Array<{
    name: string;
    type: string;
    typeId: number;
  }>;
  location: {
    id: string;
    name: string;
  };
  company?: {
    period: string;
    startDate: string;
    endDate: string;
  };
  capital: {
    paidAmount?: number;
    subscribedAmount?: number;
    announcedAmount?: number;
    share?: {
      sharePrice?: number;
      sharesCount?: number;
    };
  };
  activities: activitiesType;
};