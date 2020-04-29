import { gql } from "apollo-boost";

export const queryGetTeachers = gql`
    query {
        teachers {
            id name program { code name }
        }
    }
`
export const queryGetUser = gql`
    query getUserByCode($code: String!){
        student(where:{code:$code}){
            code name semester
            program{
                code name
                subjects{
                    code semester type name color
                }
            }
            planner{
                id name description
                activities{
                    id description
                    schedules{
                        start end day label
                    }
                }
                groups{
                    name type 
                    teacher{ name }
                    classroom{ name } 
                    schedules{
                        start end day label
                    }
                }
            }
            activities{
                name description color
                schedules{
                    start end day label
                }
            }
        }
    }
`;

export const queryGetSubjects = gql`
    query getSubjectsBySemester($semester: Int) {
        subjects(where:{semester: $semester}){
            code semester name type color
        }
    }
`;
