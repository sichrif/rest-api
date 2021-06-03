const calcueScoreAnneeUniversitaire = function(moyen, session) {
    if(session === 'principale') {
        if(moyen > 14) return 14;
        if(moyen > 12) return 11;
        if(moyen > 10) return 8;
    }
    if(session === 'controle') {
        if(moyen > 14) return 10;
        if(moyen > 12) return 8;
        if(moyen > 10) return 6;
    }
    return 0;
}

const calcueScoreBac = function(moyen, session) {
    if(session === 'principale') {
        if(moyen > 14) return 10;
        if(moyen > 12) return 7;
        if(moyen > 10) return 4;
    }
    if(session === 'controle') {
        if(moyen > 14) return 7;
        if(moyen > 12) return 5;
        if(moyen > 10) return 3;
    }
    return 0;
}

// calcule de matiere reseaux et securite reseaux
const calculScoreTelecomeMatieres = function(moyen) {
    if(moyen > 14) return 10;
    if(moyen > 12) return 7;
    if(moyen > 10) return 4;
    return 2;
}


const calculScoreMath = function(moyen) {
    if(moyen > 14) return 5;
    if(moyen > 12) return 4;
    if(moyen > 10) return 3;
    return 2;
}

const calculScorePhysique = function(moyen) {
    if(moyen > 14) return 3;
    if(moyen > 12) return 2;
    if(moyen > 10) return 1;
    return 0;
}

const calculScoreAnglais = function(moyen) {
    if(moyen > 14) return 5;
    if(moyen > 12) return 4;
    if(moyen > 10) return 3;
    return 2;
}

const calculScoreMention = function(mention) {
    if (mention === 'très bien et plus') return 4;
    if (mention === 'bien') return 3;
    if (mention === 'assez bien') return 2;
    if (mention === 'passable') return 1;
    return 0;
}

const calculScoreTypeDiplome = function(typeDiplomeReseaux) {
    return typeDiplomeReseaux? 3 : 0;
}

const calculScoreRedoublement = function(redo_Number_University) {
    return redo_Number_University * -3;
}

const calculScore = function(candiate) {
    return calcueScoreAnneeUniversitaire(
        candiate.premiere_année_universitaire.moyen,
        candiate.premiere_année_universitaire.session
    )
        +
    calcueScoreAnneeUniversitaire(
        candiate.deuxieme_année_universitaire.moyen,
        candiate.deuxieme_année_universitaire.session
    )
        +
    calcueScoreAnneeUniversitaire(
        candiate.troisieme_année_universitaire.moyen,
        candiate.troisieme_année_universitaire.session
    )
        +
    calcueScoreBac(
        candiate.bac.moyen,
        candiate.bac.session
    )
    +
    calculScoreTelecomeMatieres(
        candiate.matieres.moyen_reseaux_telecome_troisieme
    )
        +
    calculScoreTelecomeMatieres(
        candiate.matieres.moyen_securit_reseaux_troisieme
    )
        +
    calculScoreMath(
        candiate.matieres.moyen_mathematique_premiere
    )
        +
    calculScorePhysique(
        candiate.matieres.moyen_physique_premiere
    )
        +
    calculScoreAnglais(
        candiate.matieres.moyen_anglais_premiere
    )
        +
    calculScoreMention(
        candiate.PFE_mention
    )
        +
    calculScoreTypeDiplome(
        candiate.si_type_diplome_reseaux
    )
        +
    calculScoreRedoublement(
      candiate.nombre_des_redoublement_années_universitaires
    );
}

module.exports =  { calculScore };
