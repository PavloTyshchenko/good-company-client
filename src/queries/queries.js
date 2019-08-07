import { gql } from 'apollo-boost';

const getQuestionnairesQuery = gql`
{
      questionnaires {
        id
        name
        tent
        sleepingBag
        rug
        flashlight
        banana
        dishes
        brezent
        charger
        smoking
        road
        comments
      } 
  }
`;

const addQuestionnaireMutation = gql`
    mutation(
        $name: String!,
        $tent: Boolean!,
        $sleepingBag: Boolean!,
        $rug: Boolean!,
        $flashlight: Boolean!,
        $banana: Boolean!,
        $dishes: Boolean!,
        $brezent: Boolean!,
        $charger: Boolean!,
        $smoking: Boolean!,
        $road: String!,
        $comments: String!
    ) {
        addQuestionnaire(
            name: $name,
            tent: $tent,
            sleepingBag: $sleepingBag,
            rug: $rug,
            flashlight: $flashlight,
            banana: $banana,
            dishes: $dishes,
            brezent: $brezent,
            charger: $charger,
            smoking: $smoking,
            road: $road,
            comments: $comments
        ) {
            name
            road
        }
    }
`;

export {
    getQuestionnairesQuery,
    addQuestionnaireMutation
};