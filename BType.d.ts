export type BType = {
  /**
   * @example "12345"
   * @description The unique identifier of the activity
   * @readonly true
   */
  id: string;
  /**
   * @example "12345"
   * @description The third-party API ID of original entity
   * @readonly true
   */
  downstream_id?: string;
  /**
   * @example "2021-05-01T12:00:00.000Z"
   * @description The date and time of the activity
   * @readonly false
   */
  activity_datetime?: string;
  /**
   * @example "1800"
   * @description The duration of the activity in seconds
   * @readonly false
   */
  duration_seconds?: integer;
  /**
   * @example "12345"
   * @description The user related to the activity
   * @readonly false
   */
  user_id?: string;
  /**
   * @example "12345"
   * @description The account related to the activity
   * @readonly false
   */
  account_id?: string;
  /**
   * @example "12345"
   * @description The contact related to the activity
   * @readonly false
   */
  contact_id?: string;
  /**
   * @example "12345"
   * @description The company related to the activity
   * @readonly false
   */
  company_id?: string;
  /**
   * @example "12345"
   * @description The opportunity related to the activity
   * @readonly false
   */
  opportunity_id?: string;
  /**
   * @example "12345"
   * @description The lead related to the activity
   * @readonly false
   */
  lead_id?: string;
  /**
   * @example "12345"
   * @description The owner of the activity
   * @readonly false
   */
  owner_id?: string;
  /**
   * @example "12345"
   * @description The campaign related to the activity
   * @readonly false
   */
  campaign_id?: string;
  /**
   * @example "12345"
   * @description The case related to the activity
   * @readonly false
   */
  case_id?: string;
  /**
   * @example "12345"
   * @description The asset related to the activity
   * @readonly false
   */
  asset_id?: string;
  /**
   * @example "12345"
   * @description The contract related to the activity
   * @readonly false
   */
  contract_id?: string;
  /**
   * @example "12345"
   * @description The product related to the activity
   * @readonly false
   */
  product_id?: string;
  /**
   * @example "12345"
   * @description The solution related to the activity
   * @readonly false
   */
  solution_id?: string;
  /**
   * @example "12345"
   * @description The custom object related to the activity
   * @readonly false
   */
  custom_object_id?: string;
  /**
   * @example "meeting"
   * @description The type of the activity
   * @readonly false
   */
  type?: string;
  /**
   * @example "Meeting"
   * @description The title of the activity
   * @readonly false
   */
  title?: string;
  /**
   * @example "More info about the meeting"
   * @description A description of the activity
   * @readonly false
   */
  description?: string;
  /**
   * @example "An internal note about the meeting"
   * @description An internal note about the activity
   * @readonly false
   */
  note?: string;
  /**
   * @example "Space"
   * @description The location of the activity
   * @readonly false
   */
  location?: string;
  /**
   * @example "undefined"
   * @description undefined
   * @readonly false
   */
  location_address: undefined;
  /**
   * @example "false"
   * @description Whether the Activity is an all day event or not
   * @readonly false
   */
  all_day_event?: boolean;
  /**
   * @example "true"
   * @description Whether the Activity is private or not
   * @readonly false
   */
  private?: boolean;
  /**
   * @example "true"
   * @description Whether the Activity is a group event or not
   * @readonly false
   */
  group_event?: boolean;
  /**
   * @example "debrief"
   * @description The sub type of the group event
   * @readonly false
   */
  event_sub_type?: string;
  /**
   * @example "Proposed"
   * @description The type of the group event
   * @readonly false
   */
  group_event_type?: string;
  /**
   * @example "false"
   * @description Whether the activity is a child of another activity or not
   * @readonly false
   */
  child?: boolean;
  /**
   * @example "false"
   * @description Whether the activity is archived or not
   * @readonly false
   */
  archived?: boolean;
  /**
   * @example "false"
   * @description Whether the activity is deleted or not
   * @readonly false
   */
  deleted?: boolean;
  /**
   * @example "busy"
   * @description undefined
   * @readonly false
   */
  show_as?: string;
  /**
   * @example "false"
   * @description Whether the Activity is done or not
   * @readonly false
   */
  done?: boolean;
  /**
   * @example "2021-05-01T12:00:00.000Z"
   * @description The start date and time of the activity
   * @readonly false
   */
  start_datetime?: string;
  /**
   * @example "2021-05-01T12:30:00.000Z"
   * @description The end date and time of the activity
   * @readonly false
   */
  end_datetime?: string;
  /**
   * @example "30"
   * @description The duration of the activity in minutes
   * @readonly true
   */
  duration_minutes?: integer;
  /**
   * @example "2021-05-01"
   * @description The date of the activity
   * @readonly false
   */
  activity_date?: string;
  /**
   * @example "2021-05-01"
   * @description The end date of the activity
   * @readonly false
   */
  end_date?: string;
  /**
   * @example "false"
   * @description Whether the activity is recurrent or not
   * @readonly false
   */
  recurrent: boolean;
  /**
   * @example "2021-05-01T17:00:00.000Z"
   * @description The date and time of the reminder
   * @readonly false
   */
  reminder_datetime?: string;
  /**
   * @example "false"
   * @description Whether the reminder is set or not
   * @readonly false
   */
  reminder_set?: boolean;
  /**
   * @example "https://us02web.zoom.us/j/88120759396"
   * @description The URL of the video conference
   * @readonly false
   */
  video_conference_url?: string;
  /**
   * @example "zoom:88120759396"
   * @description The ID of the video conference
   * @readonly false
   */
  video_conference_id?: string;
  /**
   * @example "undefined"
   * @description Custom fields of the activity
   * @readonly false
   */
  custom_fields: array;
  /**
   * @example "undefined"
   * @description undefined
   * @readonly false
   */
  attendees: array;
  /**
   * @example "undefined"
   * @description undefined
   * @readonly false
   */
  custom_mappings: undefined;
  /**
   * @example "12345"
   * @description The user who last updated the activity
   * @readonly true
   */
  updated_by?: string;
  /**
   * @example "12345"
   * @description The user who created the activity
   * @readonly true
   */
  created_by?: string;
  /**
   * @example "2020-09-30T07:43:32.000Z"
   * @description The date and time when the activity was last updated
   * @readonly true
   */
  updated_at?: string;
  /**
   * @example "2020-09-30T07:43:32.000Z"
   * @description The date and time when the activity was created
   * @readonly true
   */
  created_at?: string;
};