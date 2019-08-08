import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

import './index.css';

// ------------ import styles ------------
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// ------------ styles ------------

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

// ------------ hardcoded data ------------
const items = [
    { id: 1, name: 'Намет', descr: 'Такий тіпа кокон міні халабуда', imgUrl: 'https://s00.yaplakal.com/pics/pics_original/5/1/2/7132215.jpg' },
    { id: 2, name: 'Спальний мішок', descr: 'Кокон який замінює постіль', imgUrl: 'http://batona.net/uploads/posts/2015-01/1422030766_01.jpg' },
    { id: 3, name: 'Каремат', descr: 'На ньому проводиться дуже багато часу: сон, бухло, їжа', imgUrl: 'https://multisport.com.ua/image/cache/catalog/data/product-758/Karemat_Izhevskij-400x400.jpg' },
    { id: 4, name: 'Ліхтарик', descr: 'Якщо проїбешся як колись я - будеш вночі годину шукати свою палатку.', imgUrl: 'https://images.unsplash.com/photo-1561916960-dea3b9b0355a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' },
    { id: 5, name: 'Бананка', descr: 'Візьми, бо блять ніхто твої речі носить насправді не хоче. Та і це ж зручно, ну.', imgUrl: 'https://images.ua.prom.st/1289191693_bananka-zhenskaya-twinsstore.jpg' },
    { id: 6, name: 'Чашка, миска, виделка', descr: 'А жрать з чогось треба, був один у нас, водку з тарілки пив.', imgUrl: 'https://patriotshop.com.ua/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/_/t/_tramp_13.jpg' },
    { id: 7, name: 'Зубна щітка, паста', descr: 'Чистим 2 рази на день (2 раз навряд)', imgUrl: 'https://grif.ua/files/images/10_2013/1382443892.jpg' },
    { id: 8, name: 'Мило', descr: 'Ми ж не хочемо вонять', imgUrl: 'https://cdn.27.ua/499/2c/51/339025_5.jpeg' },
    { id: 9, name: 'Шампунь', descr: 'Тут понятно', imgUrl: 'https://parfums.ua/media/cache/330/upload/products/o/15208652005aa68fb0044b3.jpg' },
    { id: 10, name: 'Брезент, мотузки', descr: 'Може бути дощ, мотузки - просушування одягу, натягування брезентку', imgUrl: 'https://media2.24aul.ru/imgs/400x800/548f05f312520808f022d372/brezent-tent-polipropilenovyy-s-lyuversami-polog-shtory-1-7830309.jpg' },
    { id: 11, name: 'Обухів', descr: 'Стратегічний товар: серветки, розпалювання багаття, витирання сраки.', imgUrl: 'https://cdn1.chaspik.ua/media/products/5255/image.jpg' },
    { id: 12, name: 'Алкоголь', descr: 'Стратегічний товар: драйв, пройоби на сутки, розвязування міжнародних конфліктів', imgUrl: 'https://s13.stc.all.kpcdn.net/share/i/12/10171743/inx960x640.jpg' },
    { id: 13, name: 'Їжа', descr: 'Стратегічний товар: основний спосіб продовжувати процеси життєдіяльності', imgUrl: 'https://img.tsn.ua/cached/1533905423/tsn-db9ef401efc93a5fd1b676cd38abbef3/thumbs/990x540/f1/df/bfa145e4de51bab98f3b6ecb30fddff1.jpeg' },
    { id: 14, name: 'Зарядний пристрій', descr: 'Плюс можна одну переноску, плюс павербенки', imgUrl: 'https://blog.allo.ua/wp-content/uploads/Kak-vybrat-zaryadku-dlya-telefona-sovety-ekspertov-Zaryadka-universal.jpg' },
    { id: 15, name: 'Дощовик', descr: 'Для сухості', imgUrl: 'https://i1.wp.com/3m.lviv.ua/wp-content/uploads/2016/11/%D0%9F%D0%BB%D0%B0%D1%89-%D0%B4%D0%BE%D1%89%D0%BE%D0%B2%D0%B8%D0%BA.png?fit=600%2C600' },
];

const clothes = [
    { id: 1, name: 'Нижня білизна', descr: 'Труси, шкарпетки. Може бути висока волога, тому краще комплект на кожен день', imgUrl: 'https://menactive.com.ua/image/cache/850-850/data/01%20products/4520.jpg' },
    { id: 2, name: 'Шорти які не шкода', descr: ' + можна плавки. Сидіти часто доведеться на чому попало.', imgUrl: 'https://images.ua.prom.st/811031088_w640_h640_cholovichi-sportivni-shorti.jpg' },
    { id: 3, name: 'Штани', descr: 'По прогнозам буде холоднувато', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZnvVaLSdiH7-F4Cj-QYBbeSnXTmBVsyHI7VFWq1JswHzh0a9E' },
    { id: 4, name: 'Верхній одяг', descr: 'Кілька футболок, кофта, або легка куртка', imgUrl: 'https://images.ua.prom.st/157003758_w640_h640_kurtka-parka-bu.jpg' },
    { id: 5, name: 'Кросівки, які не шкода', descr: 'Перетворяться в гівно', imgUrl: 'https://vsekidki.ru/uploads/posts/2016-07/1468309081_1443189948_nike-david-robinson-shoes.jpg' },
    { id: 6, name: 'Шльопки', descr: 'Для душу і душі', imgUrl: 'https://images.ua.prom.st/1595221622_w640_h640_shlepki-muzhskie-cinie.jpg' },
    { id: 7, name: 'Окуляри і аксесуари', descr: 'для сліпих', imgUrl: 'data:image/jpeg;base64,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' },
];

const optional = [
    {id: 1, name: 'Піджопник', descr: 'Ультракомфорт і мобільність', imgUrl: 'https://apollo-ireland.akamaized.net/v1/files/p3laqszbrxbo-UA/image;s=644x461' },
    {id: 2, name: 'Казанок', descr: 'Це до Льоші', imgUrl: 'https://bth.com.ua/image/cache/catalog/posuda-cat/8/721671053-kazan-kotelok-chugunnyj-turisticheskij-s-kryshkoj-i-dugkoj-6-l-biol-0706-3658-07-sn-800x800.jpg' },
    {id: 3, name: 'Мольфорське зілля', descr: 'Для апетиту, здоровя і хорошого настрою', imgUrl: 'https://www.poglyad.tv/wp-content/uploads/2019/07/Mak-Vasylkiv.jpeg' },
    {id: 4, name: 'Невеликий ніж', descr: 'Такий щоб не відібрали', imgUrl: 'https://apollo-ireland.akamaized.net/v1/files/35bpcccw23vf2-UA/image;s=644x461' },
]

const IndexPage = () => {
    const classes = useStyles();

    return (
        <div>
            <Layout>
                <Head title="Home" />

                <h1>Привіт.</h1>
                <h3>Захід - це краща фестивальна традиція літа,
                    тому не можна підходити до питання підготовки халтурно.
                    Нижче ти знайдеш опис, усіх речей, що можуть стати в нагоді.
                    <em> Не забудь позначитися!</em>
                </h3>

                <Link className="myButton" to="/addForm">
                    Позначитися
                </Link>


                <React.Fragment>
                    <main>
                        <br />
                        <br />
                        <h1>Абсолютна необхідність: </h1>

                        <Grid container spacing={4}>
                            {items.map(card => (
                                <Grid item key={card.id} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={card.imgUrl}
                                            title={card.name}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {card.name}
                                            </Typography>
                                            <Typography>
                                                {card.descr}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                        <br />
                        <br />
                        <h1>Одяг: </h1>
                        <Grid container spacing={4}>
                            {clothes.map(card => (
                                <Grid item key={card.id} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={card.imgUrl}
                                            title={card.name}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {card.name}
                                            </Typography>
                                            <Typography>
                                                {card.descr}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                        <br />
                        <br />
                        <h1>Опціональні речі: </h1>

                        <Grid container spacing={4}>
                            {optional.map(card => (
                                <Grid item key={card.id} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={card.imgUrl}
                                            title={card.name}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {card.name}
                                            </Typography>
                                            <Typography>
                                                {card.descr}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                    </main>

                </React.Fragment>

            </Layout>
        </div>
    );
};

export default IndexPage;