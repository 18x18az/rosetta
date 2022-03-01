import { IScoreAllianceMeta, AllowablePointFormats } from "..";
import { IQualificationResults as vrc_tipping_point_qual_results } from "../vrc_tipping_point";

export interface IMatchParticipants {
    redAlliance: IScoreAllianceMeta;
    blueAlliance: IScoreAllianceMeta;
}

export interface IPointRaw {
    redAlliance: AllowablePointFormats;
    blueAlliance: AllowablePointFormats;
}

export type TeamQualificationResults = vrc_tipping_point_qual_results;

export interface IAllianceQualificationResults {
    team1: TeamQualificationResults
    team2: TeamQualificationResults
}

export interface IMatchQualificationResults {
    redAlliance: IAllianceQualificationResults
    blueAlliance: IAllianceQualificationResults
}