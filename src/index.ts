export enum Game {
    VRC_TIPPING_POINT
}

export enum AgeGroup {
    MIDDLE_SCHOOL,
    HIGH_SCHOOL
}

export interface Team {
    id?: number;
    number: string;
    name: string;
    city: string;
    region: string;
    country: string;
    shortName: string;
    school: string;
    sponsors: string;
    tiebreaker: number;
    divisionId: number;
    checkedIn: boolean;
    ageGroup: AgeGroup;
}