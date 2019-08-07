import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'react-apollo';

// styles 
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// components
import Layout from '../components/layout';
import Head from '../components/head';

// queries
import { getQuestionnairesQuery } from '../queries/queries';

const Companions = (props) => {
    let data = props.data;
    if (data.loading) {
        return (
            <div><h1>Loading ...</h1></div>
        );
    } else {
        return (
            <Layout>
                <Head title={"Компаньйони"} />

                <Grid container spacing={4}>
                    {data.questionnaires.map(card => (
                        <Grid item key={card.id} xs={12} sm={6} md={4}>
                            <Card>

                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {card.name}
                                    </Typography>

                                    <Typography>
                                        Намет:
                                        {card.tent ? ' yes' : ' no'}
                                    </Typography>

                                    <Typography>
                                        Спальний мішок:
                                        {card.sleepingBag ? ' yes' : ' no'}
                                    </Typography>

                                    <Typography>
                                        Каремат:
                                        {card.rug ? ' yes' : ' no'}
                                    </Typography>

                                    <Typography>
                                        Ліхтарик:
                                        {card.flashlight ? ' yes' : ' no'}
                                    </Typography>
                                    
                                    <Typography>
                                        Бананка:
                                        {card.banana ? ' yes' : ' no'}
                                    </Typography>

                                    <Typography>
                                        Посуд:
                                        {card.dishes ? ' yes' : ' no'}
                                    </Typography>
                                    
                                    <Typography>
                                        Брезент:
                                        {card.brezent ? ' yes' : ' no'}
                                    </Typography>

                                    <Typography>
                                        Зарядний пристрій:
                                        {card.charger ? ' yes' : ' no'}
                                    </Typography>

                                    <Typography>
                                        Курець:
                                        {card.smoking ? ' yes' : ' no'}
                                    </Typography>

                                    <Typography>
                                        Дорога:
                                        {card.road}
                                    </Typography>

                                    <Typography>
                                        Коментар:
                                        {card.comments}
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <p><Link to="/">На головну</Link></p>
            </Layout>
        );
    }
};

export default graphql(getQuestionnairesQuery)(Companions);