
const IMG_LOGO = 'https://s3.amazonaws.com/apps-static-resources/public/app-udenar-schedule-pjqffu27-prod/uploads/53841d70-8e70-11ea-aa0c-5f96af03885a.png';
const ENUM_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const ENUM_HOURS = ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00', '18:00', '19:00', '20:00'];
const ENUM_SUBJECT_TYPE = [
    {name: 'Curriculum', icon: "subject"},
    {name: 'Elective', icon: "assignment_turned_in"},
    {name: 'Humanistic', icon: "people_icon"},
    {name: 'Language', icon:"language"}
    ];
const AUTH_SERVER = 'https://api.charlitoro.com';
const CLIENT_ID = "8c736a60-7cf4-11ea-8bbc-adcb39da8f47";
export {
    ENUM_DAYS,
    ENUM_HOURS,
    ENUM_SUBJECT_TYPE,
    IMG_LOGO,
    AUTH_SERVER,
    CLIENT_ID
}
