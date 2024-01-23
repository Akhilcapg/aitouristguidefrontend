export interface Tour {
    tourId: number;
    tourDatesPlacesList: TourDatePlace[];
  }
  
  export interface TourDatePlace {
    planId: number;
    tourDate: string;
    placeDto: Place;
  }
  
  export interface Place {
    placeId: number;
    placeName: string;
    images: string;
    address: string;
    area: string;
    distance: number;
    description: string;
    tags: string;
  }
  