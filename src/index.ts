import { raw_results as vrc_tipping_point_raw } from "./vrc_tipping_point";
import {
    MatchParticpants as VrcMatchParticipants,
    PointRaw as VrcPointRaw,
    MatchQualificationResults as VrcQualificationResults
} from "./vrc";

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

export type TeamId = string;

export interface Team {
    id?: TeamId;
    number: string;
    name: string;
    location: string;
    school: string;
}

export interface Teams {
    [key: TeamId]: Team
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

export type ParticipantInfo = VrcMatchParticipants;

export type PointRaw = VrcPointRaw;

export interface FullRawMatch {
    participants: ParticipantInfo;
    rawResults: PointRaw
}

export type QualificationResults = VrcQualificationResults;

export interface SimpleAllianceResults {
    team1: TeamId;
    team2: TeamId;
    score: number;
}

export interface SimpleMatchResult {
    name: string;
    red: SimpleAllianceResults;
    blue: SimpleAllianceResults;
}

export enum MESSAGE_TYPE {
    POST = "POST",
    GET = "GET"
}

export type IPath = Array<string>

export interface IMessage {
    type: MESSAGE_TYPE
    path: IPath
    payload?: any
}