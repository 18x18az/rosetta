export interface IRawResults {
    autonomous: number;
    awp?: boolean;
    rings_on_neutral_mobile_goal_high_branches: number;
    rings_on_other_mobile_goal_branches: number;
    rings_on_mobile_goal_bases: number;
    mobile_goals_in_alliance_home_zone: number;
    elevated_robots: number;
    elevated_mobile_goals: number;
}

export interface IQualificationResults {
    wp: number
    ap: number
    sp: number
    score: number
}