import React from 'react'

export const Home = () => {
    return (
        <>
            <div className="ie-panel">
                <a href="index.html"
                ><img
                        src="images/ie8-panel/warning_bar_0000_us.jpg"
                        height="42"
                        width="820"
                        alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."
                    /></a>
            </div>
            {/* <div className="preloader">
                <div className="preloader-logo">
                    <img
                        src="images/logo-default-151x44.png"
                        alt=""
                        width="151"
                        height="44"
                    />
                </div>
                <div className="preloader-body">
                    <div id="loadingProgressG">
                        <div className="loadingProgressG" id="loadingProgressG_1"></div>
                    </div>
                </div>
            </div> */}

            <div className="page">
                <header className="section novi-background page-header">
                    <div className="rd-navbar-wrap">
                        <nav
                            className="rd-navbar rd-navbar-corporate"
                            data-layout="rd-navbar-fixed"
                            data-sm-layout="rd-navbar-fixed"
                            data-md-layout="rd-navbar-fixed"
                            data-md-device-layout="rd-navbar-fixed"
                            data-lg-layout="rd-navbar-static"
                            data-lg-device-layout="rd-navbar-static"
                            data-lg-stick-up="true"
                            data-lg-stick-up-offset="118px"
                            data-xl-layout="rd-navbar-static"
                            data-xl-device-layout="rd-navbar-static"
                            data-xl-stick-up="true"
                            data-xl-stick-up-offset="118px"
                            data-xxl-layout="rd-navbar-static"
                            data-xxl-device-layout="rd-navbar-static"
                            data-xxl-stick-up-offset="118px"
                            data-xxl-stick-up="true"
                        >
                            <div className="rd-navbar-aside-outer">
                                <div className="rd-navbar-aside">
                                    <div className="rd-navbar-panel">
                                        <button
                                            className="rd-navbar-toggle"
                                            data-rd-navbar-toggle="#rd-navbar-nav-wrap-1"
                                        >
                                            <span></span>
                                        </button>
                                        <a className="rd-navbar-brand" href="index.html"
                                        ><img
                                                src="images/logo-default-151x44.png"
                                                alt=""
                                                width="151"
                                                height="44"
                                            /></a>
                                    </div>
                                    <div className="rd-navbar-collapse">
                                        <button
                                            className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1"
                                            data-rd-navbar-toggle="#rd-navbar-collapse-content-1"
                                        >
                                            <span></span>
                                        </button>
                                        <div
                                            className="rd-navbar-collapse-content"
                                            id="rd-navbar-collapse-content-1"
                                        >
                                            <article className="unit align-items-center">
                                                <div className="unit-left">
                                                    <span
                                                        className="icon novi-icon icon-md icon-modern mdi mdi-phone"
                                                    ></span>
                                                </div>
                                                <div className="unit-body">
                                                    <ul className="list-0">
                                                        <li>
                                                            <a className="link-default" href="tel:#"
                                                            >+33 621 31 31 80</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </article>
                                            <article className="unit align-items-center">
                                                <div className="unit-left">
                                                    <span
                                                        className="icon novi-icon icon-md icon-modern mdi mdi-map-marker"
                                                    ></span>
                                                </div>
                                                <div className="unit-body">
                                                    <a className="link-default" href="tel:#"
                                                    >61300 l'Aigle <br />9 rue Louis Boulanger, France</a
                                                    >
                                                </div>
                                            </article>
                                            <a
                                                className="button button-gray-bordered button-winona"
                                                href="#"
                                            >Postuler à une aide</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rd-navbar-main-outer">
                                <div className="rd-navbar-main">
                                    <div className="rd-navbar-nav-wrap" id="rd-navbar-nav-wrap-1">
                                        <ul className="rd-navbar-nav rd-navbar-nav-inner">
                                            <li className="rd-nav-item active">
                                                <a className="rd-nav-link" href="index.html">Accueil</a>
                                            </li>
                                            <li className="rd-nav-item">
                                                <a className="rd-nav-link" href="#about">Qui sommes-nous ?</a>
                                            </li>
                                            <li className="rd-nav-item">
                                                <a className="rd-nav-link" href="#services">Nos services</a>
                                            </li>
                                            <li className="rd-nav-item">
                                                <a className="rd-nav-link" href="#helps">Aides financées</a>
                                            </li>
                                            <li className="rd-navbar-btn-wrap">
                                                <a
                                                    className="button button-primary button-winona button-sm"
                                                    href="#"
                                                >Obtenir un financement</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>

                <section
                    className="section swiper-container swiper-slider swiper-slider-minimal"
                    data-loop="true"
                    data-slide-effect="fade"
                    data-autoplay="4759"
                    data-simulate-touch="true"
                    id=""
                >
                    <div className="swiper-wrapper">
                        <div
                            className="swiper-slide swiper-slide_video"
                            data-slide-bg="images/slider-minimal-slide-1-1920x968.jpg"
                        >
                            <div
                                style={{
                                    background: "rgba(23, 0, 88, 0.3)",
                                    height: "100%",
                                    position: "absolute",
                                }}
                            ></div>
                            <div className="container">
                                <div className="jumbotron-classNameic-content">
                                    <div className="wow-outer">
                                        <div
                                            className="title-docor-text font-weight-bold title-decorated text-uppercase wow slideInLeft text-white"
                                        >
                                            Isolation extérieure
                                        </div>
                                    </div>
                                    <h1
                                        className="text-uppercase text-white font-weight-bold wow-outer"
                                    >
                                        <span className="wow slideInDown" data-wow-delay=".2s"
                                        >Réduisez vos factures de chauffage</span
                                        >
                                    </h1>
                                    <p className="text-white wow-outer">
                                        <span className="wow slideInDown" data-wow-delay=".35s"
                                        >Une solution efficace pour économiser de l'argent tout en
                                            améliorant le confort de votre maison !</span
                                        >
                                    </p>
                                    <div className="wow-outer button-outer">
                                        <a
                                            className="button button-md button-primary button-winona wow slideInDown"
                                            href="#"
                                            data-wow-delay=".4s"
                                        >Béneficier maintenant</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="swiper-slide"
                            data-slide-bg="images/slider-minimal-slide-2-1920x968.jpg"
                        >
                            <div
                                style={{
                                    background: "rgba(23, 0, 88, 0.3)",
                                    height: "100%",
                                    position: "absolute",
                                }}
                            ></div>
                            <div className="container">
                                <div className="jumbotron-classNameic-content">
                                    <div className="wow-outer">
                                        <div
                                            className="title-docor-text font-weight-bold title-decorated text-uppercase wow slideInLeft text-white"
                                        >
                                            Simple et facile
                                        </div>
                                    </div>
                                    <h1
                                        className="text-uppercase text-white font-weight-bold wow-outer"
                                    >
                                        <span className="wow slideInDown" data-wow-delay=".2s"
                                        >Économisez sur le chauffage dès maintenant</span
                                        >
                                    </h1>
                                    <p className="text-white wow-outer">
                                        <span className="wow slideInDown" data-wow-delay=".35s"
                                        >Depuis 2012, Home Expert Habitat est un réseau d’experts en
                                            études, conseils et installations de systèmes liés aux
                                            énergies renouvelables.</span
                                        >
                                    </p>
                                    <div className="wow-outer button-outer">
                                        <a
                                            className="button button-md button-primary button-winona wow slideInDown"
                                            href="#"
                                            data-wow-delay=".4s"
                                        >Béneficier maintenant</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="swiper-slide"
                            data-slide-bg="images/slider-minimal-slide-3-1920x968.jpg"
                        >
                            <div
                                style={{
                                    background: "rgba(23, 0, 88, 0.3)",
                                    height: "100%",
                                    position: "absolute",
                                }}
                            ></div>
                            <div className="container">
                                <div className="jumbotron-classNameic-content">
                                    <div className="wow-outer">
                                        <div
                                            className="title-docor-text font-weight-bold title-decorated text-uppercase wow slideInLeft text-white"
                                        >
                                            Financez vos projets
                                        </div>
                                    </div>
                                    <h1
                                        className="text-uppercase text-white font-weight-bold wow-outer"
                                    >
                                        <span className="wow slideInDown" data-wow-delay=".2s"
                                        >à 0% d'intérêt !</span
                                        >
                                    </h1>
                                    <p className="text-white wow-outer">
                                        <span className="wow slideInDown" data-wow-delay=".35s"
                                        >Avec notre programme "Ma Prime Rénov' ÉCO-PTZ", vous pouvez
                                            obtenir jusqu'à 30 000 € de prêts sans intérêt pour vos
                                            projets de rénovation énergétique.</span
                                        >
                                    </p>
                                    <div className="wow-outer button-outer">
                                        <a
                                            className="button button-md button-primary button-winona wow slideInDown"
                                            href="#"
                                            data-wow-delay=".4s"
                                        >Béneficier maintenant</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination-outer container">
                        <div
                            className="swiper-pagination swiper-pagination-modern swiper-pagination-marked"
                            data-index-bullet="true"
                        ></div>
                    </div>
                </section>

                <section className="section section-xl-custom image-section" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="container container-lined">
                                <div className="row">
                                    <div className="col-md-4"></div>
                                    <div className="col-md-4"></div>
                                    <div className="col-md-4"></div>
                                </div>
                            </div>
                            <div className="col-md-7 col-lg-6">
                                <h3 className="text-uppercase font-weight-bold wow-outer">
                                    <span className="wow slideInDown" style={{ color: "#170058" }}
                                    >N'importe quel projet</span
                                    >
                                </h3>
                                <div className="big big-custom">
                                    C'EST UN CHALLENGE POUR NOUS DE FAIRE MIEUX
                                </div>
                                <p>
                                    Une entreprise émergente proposant une gamme diversifiée de
                                    services, Mom's in House réunit une équipe dynamique de jeunes
                                    talents et des entreprises partenaires déterminés à devenir le
                                    leader incontesté dans leurs domaines d'expertise. Découvrez dès
                                    aujourd'hui nos services et faites un pas en avant en nous
                                    contactant !
                                </p>
                                <br />
                                <div className="button-wrap-2">
                                    <a className="button button-default" href="#"
                                    >Plus à propos de nous</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-container">
                        <div className="mock-up-1">
                            <div className="object object-1">
                                <img
                                    className="wow fadeInRight"
                                    src="images/image-custom-1-395x243.jpg"
                                    alt=""
                                    width="395"
                                    height="243"
                                    style={{
                                        visibility: "visible",
                                        animationName: "fadeInRight"
                                    }}
                                />
                            </div>
                            <div className="object object-2">
                                <img
                                    className="wow fadeInRight"
                                    src="images/image-custom-2-384x189.jpg"
                                    alt=""
                                    width="384"
                                    height="189"
                                    data-wow-delay="0.2s"
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.2s",
                                        animationName: "fadeInRight"
                                    }}
                                />
                            </div>
                            <div className="object object-3">
                                <img
                                    className="wow fadeInRight"
                                    src="images/image-custom-3-395x243.jpg"
                                    alt=""
                                    width="395"
                                    height="243"
                                    data-wow-delay="0.4s"
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.4s",
                                        animationName: "fadeInRight"
                                    }}
                                />
                            </div>
                            <div className="object object-4">
                                <img
                                    className="wow fadeInRight"
                                    src="images/image-custom-4-209x184.jpg"
                                    alt=""
                                    width="209"
                                    height="184"
                                    data-wow-delay="0.6s"
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.6s",
                                        animationName: "fadeInRight"
                                    }}
                                />
                            </div>
                            <div className="object object-5">
                                <img
                                    className="wow fadeInRight"
                                    src="images/image-custom-5-395x243.jpg"
                                    alt=""
                                    width="395"
                                    height="243"
                                    data-wow-delay="0.2s"
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.4s",
                                        animationName: "fadeInRight"
                                    }}
                                />
                            </div>
                            <div className="object object-6">
                                <img
                                    className="wow fadeInRight"
                                    src="images/image-custom-6-275x184.jpg"
                                    alt=""
                                    width="275"
                                    height="184"
                                    data-wow-delay="0.4s"
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.4s",
                                        animationName: "fadeInRight"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="section novi-background section-md text-center"
                    id="services"
                >
                    <div className="container">
                        <h3 className="text-uppercase font-weight-bold wow-outer">
                            <span className="wow slideInDown" style={{ color: "#170058" }}
                            >Nos services</span
                            >
                        </h3>
                        <div className="row row-lg-50 row-35 offset-top-2">
                            <div className="col-md-6 wow-outer">
                                <article className="post-modern wow slideInLeft">
                                    <a className="post-modern-media" href="#"
                                    ><img
                                            src="images/grid-blog-1-571x353.jpg"
                                            alt=""
                                            width="571"
                                            height="353"
                                        /></a>
                                    <h4 className="post-modern-title">
                                        <a className="post-modern-title" href="#">Isolation thermique par l'extérieure</a>
                                    </h4>
                                    <p>
                                        Diminuez les déperditions de chaleur de votre maison, faites
                                        d'importantes économies et valorisez votre patrimoine.
                                        Isolation extérieure combinée d'un ravalement de façade avec
                                        toutes les finitions comprises.
                                    </p>
                                    <ul className="post-modern-meta">
                                        <li>
                                            <a className="button-winona" href="#"
                                            >Obtenir une aide gratuite
                                                <i className="linearicons-chevron-right wow fadeIn"></i
                                                ></a>
                                        </li>
                                    </ul>
                                </article>
                            </div>
                            <div className="col-md-6 wow-outer">
                                <article className="post-modern wow slideInLeft">
                                    <a className="post-modern-media" href="#"
                                    ><img
                                            src="images/grid-blog-2-571x353.jpg"
                                            alt=""
                                            width="571"
                                            height="353"
                                        /></a>
                                    <h4 className="post-modern-title">
                                        <a className="post-modern-title" href="#"
                                        >Panneaux photovoltaïques</a
                                        >
                                    </h4>
                                    <p>
                                        Produisez gratuitement votre électricité, l’énergie
                                        photovoltaïque vous permettra de bénéficier d’une réduction
                                        drastique de vos factures d’électricité, d’une façon
                                        parfaitement respectueuse de l’environnement.
                                    </p>
                                    <ul className="post-modern-meta">
                                        <li>
                                            <a className="button-winona" href="#"
                                            >Obtenir une aide gratuite
                                                <i className="linearicons-chevron-right wow fadeIn"></i
                                                ></a>
                                        </li>
                                    </ul>
                                </article>
                            </div>
                            <div className="col-md-6 wow-outer">
                                <article className="post-modern wow slideInLeft">
                                    <a className="post-modern-media" href="#"
                                    ><img
                                            src="images/grid-blog-3-571x353.jpg"
                                            alt=""
                                            width="571"
                                            height="353"
                                        /></a>
                                    <h4 className="post-modern-title">
                                        <a className="post-modern-title" href="#">Poêle à granulés</a>
                                    </h4>
                                    <p>
                                        Chauffage d'appoint, moderne esthétique et écologique.
                                        Profitez d’une chaleur douce et agréable.
                                    </p>
                                    <ul className="post-modern-meta">
                                        <li>
                                            <a className="button-winona" href="#"
                                            >Obtenir une aide gratuite
                                                <i className="linearicons-chevron-right wow fadeIn"></i
                                                ></a>
                                        </li>
                                    </ul>
                                </article>
                            </div>
                            <div className="col-md-6 wow-outer">
                                <article className="post-modern wow slideInLeft">
                                    <a className="post-modern-media" href="#"
                                    ><img
                                            src="images/grid-blog-4-571x353.jpg"
                                            alt=""
                                            width="571"
                                            height="353"
                                        /></a>
                                    <h4 className="post-modern-title">
                                        <a className="post-modern-title" href="#">Ballon d'eau chaude</a>
                                    </h4>
                                    <p>
                                        Écologique et économique le ballon thermodynamique vous offre
                                        une source d'eau chaude pure et saine en permanence.
                                    </p>
                                    <ul className="post-modern-meta">
                                        <li>
                                            <a className="button-winona" href="#"
                                            >Obtenir une aide gratuite
                                                <i className="linearicons-chevron-right wow fadeIn"></i
                                                ></a>
                                        </li>
                                    </ul>
                                </article>
                            </div>
                            <div className="col-md-12 wow-outer">
                                <a className="button button-primary button-winona button-md" href="#"
                                >En savoir plus</a
                                >
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section novi-background section-lg bg-gray-100">
                    <div className="container">
                        <div className="row row-30">
                            <div className="col-sm-6 col-lg-4 wow-outer">
                                <article className="box-minimal">
                                    <div
                                        className="box-chloe__icon novi-icon linearicons-user wow fadeIn"
                                    ></div>
                                    <div className="box-minimal-main wow-outer">
                                        <h4 className="box-minimal-title wow slideInDown">
                                            Employés Qualifiés
                                        </h4>
                                        <p className="wow fadeInUpSmall">
                                            Notre équipe se compose de meilleurs gestionnaires en
                                            bâtiment qualifiés et expérimentés, prêts à vous aider.
                                        </p>
                                    </div>
                                </article>
                            </div>
                            <div className="col-sm-6 col-lg-4 wow-outer">
                                <article className="box-minimal">
                                    <div
                                        className="box-chloe__icon novi-icon linearicons-bubble-text wow fadeIn"
                                        data-wow-delay=".1s"
                                    ></div>
                                    <div className="box-minimal-main wow-outer">
                                        <h4
                                            className="box-minimal-title wow slideInDown"
                                            data-wow-delay=".1s"
                                        >
                                            Consultations gratuites
                                        </h4>
                                        <p className="wow fadeInUpSmall" data-wow-delay=".1s">
                                            Notre rencontre avec un client commence toujours par une
                                            consultation consultation gratuite afin de déterminer le
                                            type de bien recherché.
                                        </p>
                                    </div>
                                </article>
                            </div>
                            <div className="col-sm-6 col-lg-4 wow-outer">
                                <article className="box-minimal">
                                    <div
                                        className="box-chloe__icon novi-icon linearicons-star wow fadeIn"
                                        data-wow-delay=".2s"
                                    ></div>
                                    <div className="box-minimal-main wow-outer">
                                        <h4
                                            className="box-minimal-title wow slideInDown"
                                            data-wow-delay=".2s"
                                        >
                                            100% Garantie
                                        </h4>
                                        <p className="wow fadeInUpSmall" data-wow-delay=".2s">
                                            Tous les résultats que vous obtiendrez sont garantis à 100%.
                                            garantis pour vous offrir le meilleur choix de prestation
                                            dans l'ensemble des territoires.
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="section novi-background section-lg text-center"
                    id="helps"
                >
                    <div className="container">
                        <h3 className="text-uppercase font-weight-bold wow-outer">
                            <span className="wow slideInDown" style={{ color: "#170058" }}>
                                Travaux de qualité et aides financières simplifiées</span
                            >
                        </h3>
                        <p>
                            <span className="text-width-1"
                            >De l'étude à la réalisation en passant par l'obtention des aides
                                de l'État, Home Expert Habitat, votre partenaire de A à Z.</span
                            >
                        </p>
                        <div className="row row-35 row-xxl-70 offset-top-2">
                            <div className="col-sm-6 col-lg-3">
                                <article className="thumbnail-light">
                                    <a className="thumbnail-light-media" href="#"
                                    ><img
                                            className="thumbnail-light-image"
                                            src="images/service-thumbnail-1-270x300.jpg"
                                            alt=""
                                            width="270"
                                            height="300"
                                        /></a>
                                    <h4 className="thumbnail-light-title">
                                        <a href="#">Ballon d'eau chaude</a>
                                    </h4>
                                </article>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <article className="thumbnail-light">
                                    <a className="thumbnail-light-media" href="#"
                                    ><img
                                            className="thumbnail-light-image"
                                            src="images/service-thumbnail-2-270x300.jpg"
                                            alt=""
                                            width="270"
                                            height="300"
                                        /></a>
                                    <h4 className="thumbnail-light-title">
                                        <a href="#">Poêle à granulés</a>
                                    </h4>
                                </article>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <article className="thumbnail-light">
                                    <a className="thumbnail-light-media" href="#"
                                    ><img
                                            className="thumbnail-light-image"
                                            src="images/service-thumbnail-3-270x300.jpg"
                                            alt=""
                                            width="270"
                                            height="300"
                                        /></a>
                                    <h4 className="thumbnail-light-title">
                                        <a href="#">Pompe à chaleur</a>
                                    </h4>
                                </article>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <article className="thumbnail-light">
                                    <a className="thumbnail-light-media" href="#"
                                    ><img
                                            className="thumbnail-light-image"
                                            src="images/service-thumbnail-4-270x300.jpg"
                                            alt=""
                                            width="270"
                                            height="300"
                                        /></a>
                                    <h4 className="thumbnail-light-title">
                                        <a href="#">Isolation thermique</a>
                                    </h4>
                                </article>
                            </div>
                            <div className="col-md-12 wow-outer">
                                <a className="button button-primary button-winona button-md" href="#"
                                >Postuler à une aide entièrement financée</a
                                >
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="section novi-background section-1 bg-primary-darker text-center"
                    style={{ background: "#0d0030" }}
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-10 col-lg-7 col-xl-6">
                                <h3 className="wow-outer">
                                    <span className="wow slideInDown text-uppercase"
                                    >Des offres clés en main</span
                                    >
                                </h3>
                                <p className="heading-subtitle">Votre projet clé en main</p>
                                <p className="wow-outer offset-top-4">
                                    <span className="wow slideInDown" data-wow-delay=".05s"
                                    >Mom's In Home vous propose des offres clés en main, de
                                        l'obtention de vos aides à la réalisation de vos
                                        travaux.</span
                                    >
                                </p>
                                <div className="wow-outer button-outer">
                                    <a
                                        className="button button-primary-white button-winona wow slideInDown"
                                        href="#"
                                        data-wow-delay=".1s"
                                    >Postuler maintenant</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section novi-background section-lg text-center">
                    <div className="container">
                        <h3 className="text-uppercase font-weight-bold wow-outer">
                            <span className="wow slideInDown" style={{ color: "#170058" }}
                            >Témoignages de nos clients</span
                            >
                        </h3>
                        <div
                            className="owl-carousel wow fadeIn"
                            data-items="1"
                            data-md-items="2"
                            data-lg-items="3"
                            data-dots="true"
                            data-nav="false"
                            data-loop="true"
                            data-autoplay="true"
                            data-autoplay-speed="731"
                            data-autoplay-timeout="4268"
                            data-margin="30"
                            data-stage-padding="0"
                            data-mouse-drag="false"
                        >
                            <blockquote className="quote-classNameic">
                                <div className="quote-classNameic-meta">
                                    <div className="quote-classNameic-avatar">
                                        <img src="images/profile.png" alt="" width="96" height="96" />
                                    </div>
                                    <div className="quote-classNameic-info">
                                        <cite className="quote-classNameic-cite">Anonyme</cite>
                                        <p className="quote-classNameic-caption">Isolation extérieure</p>
                                    </div>
                                </div>
                                <div className="quote-classNameic-text">
                                    <p>
                                        Travail de professionnels consciencieux, soigneux ; ils sont à
                                        notre écoute. Nous sommes entièrement satisfaits du résultat.
                                        De plus, nous notons une nette amélioration du confort
                                        thermique.
                                    </p>
                                </div>
                            </blockquote>
                            <blockquote className="quote-classNameic">
                                <div className="quote-classNameic-meta">
                                    <div className="quote-classNameic-avatar">
                                        <img src="images/profile.png" alt="" width="96" height="96" />
                                    </div>
                                    <div className="quote-classNameic-info">
                                        <cite className="quote-classNameic-cite">Anonyme</cite>
                                        <p className="quote-classNameic-caption">Isolation extérieure</p>
                                    </div>
                                </div>
                                <div className="quote-classNameic-text">
                                    <p>
                                        ITE polystyrène face nord, fibre de bois face sud excellente
                                        prestation, très bons conseils intervenants très agréables Du
                                        super boulot !
                                    </p>
                                </div>
                            </blockquote>
                            <blockquote className="quote-classNameic">
                                <div className="quote-classNameic-meta">
                                    <div className="quote-classNameic-avatar">
                                        <img src="images/profile.png" alt="" width="96" height="96" />
                                    </div>
                                    <div className="quote-classNameic-info">
                                        <cite className="quote-classNameic-cite">Anonyme</cite>
                                        <p className="quote-classNameic-caption">Panneaux solaires</p>
                                    </div>
                                </div>
                                <div className="quote-classNameic-text">
                                    <p>
                                        Voilà 9 mois que j’ai sauté le pas et me suis équipé de
                                        panneaux solaires pour ma propre consommation. Un prévisionnel
                                        très fiable puisque le commercial avait estimé que je serais
                                        en moyenne autonome à 70% en électricité, et sur l’appli je
                                        constate une économie de 67% sur les 9 derniers mois.
                                    </p>
                                </div>
                            </blockquote>
                            <blockquote className="quote-classNameic">
                                <div className="quote-classNameic-meta">
                                    <div className="quote-classNameic-avatar">
                                        <img src="images/profile.png" alt="" width="96" height="96" />
                                    </div>
                                    <div className="quote-classNameic-info">
                                        <cite className="quote-classNameic-cite">Anonyme</cite>
                                        <p className="quote-classNameic-caption">Pompe à chaleur</p>
                                    </div>
                                </div>
                                <div className="quote-classNameic-text">
                                    <p>
                                        Un sans faute pour l’acquisition et la pose d’une pompe à
                                        chaleur air-eau en remplacement d’une chaudière au fioul. Les
                                        équipes sont très pro, disponibles et réactives.
                                    </p>
                                </div>
                            </blockquote>
                            <blockquote className="quote-classNameic">
                                <div className="quote-classNameic-meta">
                                    <div className="quote-classNameic-avatar">
                                        <img src="images/profile.png" alt="" width="96" height="96" />
                                    </div>
                                    <div className="quote-classNameic-info">
                                        <cite className="quote-classNameic-cite">Anonyme</cite>
                                        <p className="quote-classNameic-caption">Client Regulier</p>
                                    </div>
                                </div>
                                <div className="quote-classNameic-text">
                                    <p>
                                        Travail de professionnels consciencieux, soigneux ; ils sont à
                                        notre écoute. Nous sommes entièrement satisfaits du résultat.
                                        De plus, nous notons une nette amélioration du confort
                                        thermique.
                                    </p>
                                </div>
                            </blockquote>
                            <blockquote className="quote-classNameic">
                                <div className="quote-classNameic-meta">
                                    <div className="quote-classNameic-avatar">
                                        <img src="images/profile.png" alt="" width="96" height="96" />
                                    </div>
                                    <div className="quote-classNameic-info">
                                        <cite className="quote-classNameic-cite">Anonyme</cite>
                                        <p className="quote-classNameic-caption">Client Regulier</p>
                                    </div>
                                </div>
                                <div className="quote-classNameic-text">
                                    <p>
                                        ITE polystyrène face nord, fibre de bois face sud excellente
                                        prestation, très bons conseils intervenants très agréables Du
                                        super boulot !
                                    </p>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </section>

                <footer
                    className="section novi-background footer-advanced"
                    style={{ background: "#0d0030" }}
                >
                    <div className="footer-advanced-main">
                        <div className="container">
                            <div className="row row-50">
                                <div className="col-lg-4">
                                    <h5 className="font-weight-bold text-uppercase text-white">
                                        A Propos de nous
                                    </h5>
                                    <p className="footer-advanced-text">
                                        Mom's In House est un réseau national d’experts en études,
                                        conseils et installations de systèmes liés aux énergies
                                        renouvelables.
                                    </p>
                                </div>
                                <div className="col-sm-7 col-md-5 col-lg-4">
                                    <h5 className="font-weight-bold text-uppercase text-white">
                                        Informations
                                    </h5>
                                    <article className="post-inline">
                                        <p className="post-inline-title text-white">
                                            <a href="#">Du Lundi au Vendredi de 09h00 à 17h00</a>
                                        </p>
                                        <ul className="post-inline-meta">
                                            <li>Jours ouverts</li>
                                        </ul>
                                    </article>
                                    <article className="post-inline">
                                        <p className="post-inline-title text-white">
                                            <a href="#">61300 l'Aigle, 9 rue Louis Boulanger, France</a>
                                        </p>
                                        <ul className="post-inline-meta">
                                            <li>Où nous trouver</li>
                                        </ul>
                                    </article>
                                </div>

                                <div className="col-sm-7 col-md-5 col-lg-4">
                                    <h5 className="font-weight-bold text-uppercase text-white">
                                        Navigation
                                    </h5>

                                    <div className="footer-advanced-aside">
                                        <div>
                                            <ul className="list-nav text-white" style={{ display: "grid" }}>
                                                <li><a href="index.html">Accueil</a></li>
                                                <li><a href="#">Qui sommes-nous ?</a></li>
                                                <li><a href="#">Nos services</a></li>
                                                <li><a href="#">Nous contacter</a></li>
                                            </ul>
                                        </div>

                                        <article className="post-inline">
                                            <div>
                                                <ul className="foter-social-links list-inline list-inline-md">
                                                    <li>
                                                        <a
                                                            className="icon novi-icon icon-sm link-default mdi mdi-facebook"
                                                            href="#"
                                                        ></a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="icon novi-icon icon-sm link-default mdi mdi-twitter"
                                                            href="#"
                                                        ></a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="icon novi-icon icon-sm link-default mdi mdi-instagram"
                                                            href="#"
                                                        ></a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="icon novi-icon icon-sm link-default mdi mdi-google"
                                                            href="#"
                                                        ></a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="icon novi-icon icon-sm link-default mdi mdi-linkedin"
                                                            href="#"
                                                        ></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <hr />
                    </div>
                    <div className="footer-advanced-aside">
                        <div className="container">
                            <div className="footer-advanced-layout">
                                <a className="brand" href="index.html"
                                ><img
                                        src="images/logo-light-115x34.png"
                                        alt=""
                                        width="115"
                                        height="34"
                                    /></a>
                                <p className="rights">
                                    <span>&copy;&nbsp;</span><span className="copyright-year"></span>.
                                    Tous droits réservés.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            <div className="snackbars" id="form-output-global"></div>
        </>
    )
}
