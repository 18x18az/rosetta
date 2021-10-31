import { raw_results as vrc_tipping_point_raw } from "./vrc_tipping_point";

export type AllowablePointFormats = vrc_tipping_point_raw;

export enum Game {
    VRC_TIPPING_POINT
}

export enum Program {
    VRC
}

export interface CompetitionMeta {
    game: Game;
    program: Program;
}

export enum AgeGroup {
    MIDDLE_SCHOOL,
    HIGH_SCHOOL
}

type TeamId = number;

export interface Team {
    id?: TeamId;
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

export interface ScoreTeamMeta {
    teamId: TeamId;
    disqualified: boolean;
    noShow: boolean;
}

export interface ScoreAllianceMeta {
    team1: ScoreTeamMeta;
    team2: ScoreTeamMeta;
}

export interface VrcMatchParticpants {
    redAlliance: ScoreAllianceMeta;
    blueAlliance: ScoreAllianceMeta;
}