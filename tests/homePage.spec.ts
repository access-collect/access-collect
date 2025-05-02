import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("/");
})

test('check content of home page', async ({ page }) => {
    await expect(page.getByRole('main')).toMatchAriaSnapshot(`
        - main:
          - img
          - paragraph: Optimisez la collecte des déchets en entreprise avec une solution inclusive et écologique
          - link "Cliquer sur le bouton Demander une démo"
          - paragraph: Une application pour faciliter la collecte des déchets recyclables en entreprise, tout en favorisant l’inclusion des personnes en situation de handicap.
          - img "photo de poubelle"
          - heading "Pourquoi choisir notre application ?" [level=1]
          - img "exemple d'une vue mobile sur un téléphone"
          - img "élément décoratif jaune"
          - paragraph: Accessible à tous, simple et intuitif
          - img "élément décoratif jaune"
          - paragraph: Favorisez l’inclusion sociale en collaborant avec des collecteurs en situation de handicap, formés et motivés.
          - heading "Les fonctionnalités" [level=1]
          - img "image représentant une personne qui planifie ses tâches"
          - heading "PLANIFIER" [level=2]
          - paragraph: Planifiez et anticipez vos collectes avec une gestion centralisée
          - img "image représentant une personne qui saisie sur un ordinateur portable"
          - heading "SAISIR" [level=2]
          - paragraph: Gagnez du temps sur la collecte et la saisie de vos données
          - img "image représentant une personne qui tourne une horloge pour représenter le temps qui passe"
          - heading "ACCES CLIENT" [level=2]
          - paragraph: Offrez à vos clients une vision en temps réel des collectes grâce à un tableau de bord intuitif.
          - img "image représentant une personne qui saisie sur un ordinateur portable"
          - heading "STATISTIQUES" [level=2]
          - paragraph: Recevez des rapports détaillés sur vos activités de recyclage et votre impact écologique
          - heading "Les bénéf ices" [level=1]
          - img
          - heading "REDUCTION DES COÛTS" [level=2]
          - img "image montrant un escalier de cube avec une flèche pour montrer le coût qui diminue"
          - paragraph: Optimisez la gestion de vos déchets et réduisez vos coûts opérationnels
          - img
          - heading "IMPACT ENVIRONNEMENTAL POSITIF" [level=2]
          - paragraph: Mesurez et améliorez votre contribution à la réduction des déchets
          - img "puce pour liste des différents bénéfices"
          - img
          - heading "AMELIORATION DE L’IMAGE DE MARQUE" [level=2]
          - img "puce pour liste des différents bénéfices"
          - paragraph: Renforcez votre engagement social et écologique auprès de vos partenaires et clients
          - heading "AccessCollect en chiffre" [level=1]
          - img "image d'une poubelle"
          - paragraph: 100T
          - paragraph: de déchets recyclés
          - img "image d'un collecteur"
          - paragraph: /\\d+/
          - paragraph: collecteurs en situation de handicap engagés et soutenus
          - heading "Ils nous ont fait confiance" [level=1]
          - button "← Previous"
          - link "logo atelier papier soleil":
            - img "logo atelier papier soleil"
          - link "logo la drisse":
            - img "logo la drisse"
          - link "logo b&p environnement":
            - img "logo b&p environnement"
          - button "→ Next"
          - list:
            - listitem:
              - button "• 1"
            - listitem:
              - button "• 2"
            - listitem:
              - button "• 3"
          - img "flèche animée insistant sur la phrase n'hésitez plus!"
          - heading "N'hésitez plus!" [level=1]
          - paragraph: Dynamiser la gestion de votre collecte de déchets grâce à notre solution simple, fiable et flexible
          - link "Cliquer sur le bouton NOUS CONTACTER"
        `);
});

test('check redirection of homepage', async ({ page }) => {
    await page.getByRole('link', { name: 'Cliquer sur le bouton SE' }).click();
    //login page
    await expect(page.getByRole('main')).toMatchAriaSnapshot(`
      - heading "Bienvenue sur AccessCollect" [level=1]
      - img "Illustration bacs de tri"
      - text: Email
      - textbox "Email"
      - text: Mot de passe
      - textbox
      - button "CONNEXION"
      - link "Mot de passe oublié ?":
        - paragraph: Mot de passe oublié ?
      `);
      // CGU page
      await page.getByRole('link', { name: 'CGU -' }).click();
      await expect(page.getByRole('main')).toMatchAriaSnapshot(`
        - heading "Conditions générales d'utilisation" [level=1]
        - heading /En vigueur au \\d+\\/\\d+\\/\\d+/ [level=2]
        - paragraph: Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services par tripluch et de définir les conditions d’accès et d’utilisation des services par « l'Utilisateur ».
        - paragraph: Les présentes CGU sont accessibles sur le site à la rubrique «CGU».
        - paragraph: "Toute inscription ou utilisation du site implique l'acceptation sans aucune réserve ni restriction des présentes CGU par l’utilisateur. Lors de l'inscription sur le site via le Formulaire d’inscription, chaque utilisateur accepte expressément les présentes CGU en cochant la case précédant le texte suivant : « Je reconnais avoir lu et compris les CGU et je les accepte »."
        - paragraph: En cas de non-acceptation des CGU stipulées dans le présent contrat, l'Utilisateur se doit de renoncer à l'accès des services proposés par le site. tripluch.fr se réserve le droit de modifier unilatéralement et à tout moment le contenu des présentes CGU.
        - 'heading "ARTICLE 1 : Accès au site" [level=3]'
        - paragraph: "Le site tripluch.fr permet à l'Utilisateur un accès gratuit aux services suivants :"
        - paragraph: Pré-inscription à la plateforme, accès à un compte personnel.
        - paragraph: Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
        - paragraph: L’Utilisateur non membre n'a pas accès aux services réservés. Pour cela, il doit s’inscrire en remplissant le formulaire. En acceptant de s’inscrire aux services réservés, l’Utilisateur membre s’engage à fournir des informations sincères et exactes concernant son état civil et ses coordonnées, notamment son adresse email.
        - paragraph: Pour accéder aux services, l’Utilisateur doit ensuite s'identifier à l'aide de son identifiant et de son mot de passe qui lui seront communiqués après son inscription.
        - paragraph: Tout Utilisateur membre régulièrement inscrit pourra également solliciter sa désinscription en se rendant à la page dédiée sur son espace personnel. Celle-ci sera effective dans un délai raisonnable.
        - paragraph: Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du site ou serveur et sous réserve de toute interruption ou modification en cas de maintenance, n'engage pas la responsabilité de tripluch.fr. Dans ces cas, l’Utilisateur accepte ainsi ne pas tenir rigueur à l’éditeur de toute interruption ou suspension de service, même sans préavis.
        - paragraph: L'Utilisateur a la possibilité de contacter le site par messagerie électronique à l’adresse email de l’éditeur communiqué à l’ARTICLE 1
        - 'heading "ARTICLE 2 : Collecte des données" [level=3]'
        - paragraph: "/Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°\\\\d+-\\\\d+ du 6 janvier \\\\d+ relative à l'informatique, aux fichiers et aux libertés\\\\. En vertu de la loi Informatique et Libertés, en date du 6 janvier \\\\d+, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles\\\\. L'Utilisateur exerce ce droit : par mail à l'adresse email contact@tripluch\\\\.fr/"
        - 'heading "ARTICLE 3 : Propriété intellectuelle" [level=3]'
        - paragraph: Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.
        - paragraph: L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.
        - paragraph: /Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L \\d+-2 et suivants du Code de la propriété intellectuelle\\./
        - paragraph: Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source.
        - 'heading "ARTICLE 4 : Responsabilité" [level=3]'
        - paragraph: Les sources des informations diffusées sur le site tripluch.fr sont réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.
        - paragraph: Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site tripluch.fr ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenue responsable de l’utilisation et de l’interprétation de l’information contenue dans ce site.
        - paragraph: L'Utilisateur s'assure de garder son mot de passe secret. Toute divulgation du mot de passe, quelle que soit sa forme, est interdite. Il assume les risques liés à l'utilisation de son identifiant et mot de passe. Le site décline toute responsabilité.
        - paragraph: Le site tripluch.fr ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement provenant de ce site.
        - paragraph: La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.
        - 'heading "ARTICLE 5 : Liens hypertextes" [level=3]'
        - paragraph: Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces liens, il sortira du site tripluch.fr. Ce dernier n’a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
        - 'heading "ARTICLE 6 : Cookies" [level=3]'
        - paragraph: L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation.
        - paragraph: Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l’ordinateur de l’Utilisateur par votre navigateur et qui sont nécessaires à l’utilisation du site tripluch.fr. Les cookies ne contiennent pas d’information personnelle et ne peuvent pas être utilisés pour identifier quelqu’un. Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de l’Utilisateur, d’autres restent. L’information contenue dans les cookies est utilisée pour améliorer le site tripluch.fr.
        - paragraph: En naviguant sur le site, l’Utilisateur les accepte. L’Utilisateur pourra désactiver ces cookies par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.
        - 'heading "ARTICLE 7 : Droit applicable et juridiction compétente" [level=3]'
        - paragraph: La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître. Pour toute question relative à l’application des présentes CGU, vous pouvez joindre l’éditeur aux coordonnées inscrites dans les Mentions Légales.
        `);
        //legals
      await page.getByRole('link', { name: 'Mentions Légales -' }).click();
      await expect(page.getByRole('main')).toMatchAriaSnapshot(`
        - heading "Mentions Légales" [level=1]
        - paragraph: "Propriétaire et Responsable du site :"
        - paragraph: La société tripluch,
        - paragraph: /Société Anonyme au capital de \\d+ euros/
        - paragraph: Immatriculée au registre du commerce de Draguignan
        - paragraph: /Sous le numéro \\d+ \\d+ \\d+ \\(\\d+\\)/
        - paragraph: /Et dont le siège social est situé au 2 impasse des Iris \\d+ GAREOULT/
        - paragraph: "/Responsable de publication : Maud Tribaudeau - contact@tripluch\\\\.fr – \\\\d+ \\\\d+ \\\\d+ \\\\d+ \\\\d+/"
        - paragraph: "Hébergement des données :"
        - paragraph: "Serveur AWS : AWS Paris (eu-west-3)"
        `);
        //confidentiality page
      await page.getByRole('link', { name: 'Politique de confidentialité' }).click();
      await expect(page.getByRole('main')).toMatchAriaSnapshot(`
        - heading "Politique de confidentialité" [level=1]
        - heading "tripluch (https://tripluch.fr/)" [level=2]
        - 'heading "ARTICLE 1 : Préambule" [level=3]'
        - text: "La présente politique de confidentialité a pour but d’informer les utilisateurs du site :"
        - list:
          - listitem: "Sur la manière dont sont collectées leurs données personnelles. Sont considérées comme des données personnelles, toute information permettant d’identifier un utilisateur. A ce titre, il peut s’agir : de ses noms et prénoms, de son âge, de son adresse postale ou email, de sa localisation ou encore de son adresse IP (liste non-exhaustive) ;"
          - listitem: Sur les droits dont ils disposent concernant ces données ;
          - listitem: Sur la personne responsable du traitement des données à caractère personnel collectées et traitées ;
          - listitem: Sur les destinataires de ces données personnelles ;
          - listitem: Sur la politique du site en matière de cookies.
        - text: "Cette politique complète les mentions légales et les Conditions Générales d’Utilisation consultables par les utilisateurs à l’adresse suivante :"
        - link "https://tripluch.fr/privacy"
        - 'heading "ARTICLE 2 : Principes relatifs à la collecte et au traitement des données personnelles" [level=3]'
        - text: /Conformément à l’article 5 du Règlement européen \\d+\\/\\d+, les données à caractère personnel sont :/
        - list:
          - listitem: Traitées de manière licite, loyale et transparente au regard de la personne concernée ;
          - listitem: Collectées pour des finalités déterminées (cf. Article 3.1 des présentes), explicites et légitimes, et ne pas être traitées ultérieurement d'une manière incompatible avec ces finalités ;
          - listitem: Adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées ;
          - listitem: Exactes et, si nécessaire, tenues à jour. Toutes les mesures raisonnables doivent être prises pour que les données à caractère personnel qui sont inexactes, eu égard aux finalités pour lesquelles elles sont traitées, soient effacées ou rectifiées sans tarder ;
          - listitem: Conservées sous une forme permettant l'identification des personnes concernées pendant une durée n'excédant pas celle nécessaire au regard des finalités pour lesquelles elles sont traitées ;
          - listitem: Traitées de façon à garantir une sécurité appropriée des données collectées, y compris la protection contre le traitement non autorisé ou illicite et contre la perte, la destruction ou les dégâts d'origine accidentelle, à l'aide de mesures techniques ou organisationnelles appropriées.
          - text: "Le traitement n'est licite que si, et dans la mesure où, au moins une des conditions suivantes est remplie :"
          - listitem: La personne concernée a consenti au traitement de ses données à caractère personnel pour une ou plusieurs finalités spécifiques ;
          - listitem: Le traitement est nécessaire à l'exécution d'un contrat auquel la personne concernée est partie ou à l'exécution de mesures précontractuelles prises à la demande de celle-ci ;
          - listitem: Le traitement est nécessaire au respect d'une obligation légale à laquelle le responsable du traitement est soumis ;
          - listitem: Le traitement est nécessaire à la sauvegarde des intérêts vitaux de la personne concernée ou d'une autre personne physique ;
          - listitem: Le traitement est nécessaire à l'exécution d'une mission d'intérêt public ou relevant de l'exercice de l'autorité publique dont est investi le responsable du traitement ;
          - listitem: Le traitement est nécessaire aux fins des intérêts légitimes poursuivis par le responsable du traitement ou par un tiers, à moins que ne prévalent les intérêts ou les libertés et droits fondamentaux de la personne concernée qui exigent une protection des données à caractère personnel, notamment lorsque la personne concernée est un enfant.
        - 'heading "ARTICLE 3 : Données à caractère personnel collectées et traitées dans le cadre de la navigation sur le site" [level=3]'
        - paragraph: "Article 3.1 : Données collectées"
        - paragraph: "Les données personnelles collectées dans le cadre de notre activité sont les suivantes : Nom, Prénom, type d’utilisateur et adresse e-mail. La collecte et le traitement de ces données répond à la (aux) finalité(s) suivante(s) : Personnalisation de compte et contact via e-mail."
        - paragraph: "Article 3.2 : Mode de collecte des données"
        - paragraph: "Lorsque vous utilisez notre site, sont automatiquement collectées les données suivantes : Des données analytiques via Google Analytics. Les données sont anonymes."
        - paragraph: "D’autres données personnelles sont collectées lorsque vous effectuez les opérations suivantes sur la plateforme : Nom, Prénom, type d’utilisateur et adresse e-mail à l’inscription de l’utilisateur. Localisation, si autorisation par l'utilisateur, lors de l'ouverture de la carte. La localisation n'est pas stockée. Un token (clé) à la connexion de l'utilisateur pour faire vivre la session."
        - paragraph: "Elles sont conservées par le responsable du traitement dans des conditions raisonnables de sécurité, pour une durée de : tant que l’utilisateur est actif, les données sont conservées. Dans le cas contraire, nous limitons à 5 ans la période à compter de la dernière activité. La société est susceptible de conserver certaines données à caractère personnel au-delà des délais annoncés ci-dessus afin de remplir ses obligations légales ou réglementaires."
        - paragraph: "Article 3.3 : Hébergement des données"
        - paragraph: L'hebergement des données se fait par MongoDb sur un serveur AWS localisé à Paris ( AWS Paris (eu-west-3) )
        - paragraph: Aucune donnée n’est transmise à un tier.
        - paragraph: Aucun cookie n’est utilisé/collecté.
        - 'heading "ARTICLE 4 : Responsable du traitement des données et délégué à la protection des données" [level=3]'
        - paragraph: "Article 4.1 : Le responsable du traitement des données :"
        - paragraph: "/Les données à caractère personnelles sont collectées par tripluch, \\\\d+ place de la liberté \\\\d+ Toulon, Société Anonyme, dont le numéro d’immatriculation est le \\\\d+ \\\\d+ \\\\d+ \\\\(\\\\d+\\\\)\\\\. Le responsable du traitement des données à caractère personnel peut être contacté de la manière suivante : Par mail : contact@tripluch\\\\.fr/"
        - paragraph: "Article 4.2 : Le délégué à la protection des données"
        - paragraph: "Le délégué à la protection des données de l’entreprise ou du responsable est : Maud Tribaudeau maud.tribaudeau@tripluch.fr."
        - text: Si vous estimez, après nous avoir contactés, que vos droits “Informatique et Libertés”, ne sont pas respectés, vous pouvez adresser une information à la CNIL.
        - 'heading "ARTICLE 5 : Les droits de l''utilisateur en matière de collecte et traitement des données" [level=3]'
        - text: /Tout utilisateur concerné par le traitement de ses données personnelles peut se prévaloir des droits suivants, en application du règlement européen \\d+\\/\\d+ et de la Loi Informatique et Liberté \\(Loi \\d+-\\d+ du 6 janvier \\d+\\) :/
        - list:
          - listitem: /Droit d’accès, de rectification et droit à l’effacement des données \\(posés respectivement aux articles \\d+, \\d+ et \\d+ du RGPD\\) ;/
          - listitem: /Droit à la portabilité des données \\(article \\d+ du RGPD\\) ;/
          - listitem: /Droit à la limitation \\(article \\d+ du RGPD\\) et à l’opposition du traitement des données \\(article \\d+ du RGPD\\) ;/
          - listitem: Droit de ne pas faire l’objet d’une décision fondée exclusivement sur un procédé automatisé ;
          - listitem: Droit de déterminer le sort des données après la mort ;
          - listitem: /Droit de saisir l’autorité de contrôle compétente \\(article \\d+ du RGPD\\)\\./
        - text: "Pour exercer vos droits, veuillez adresser votre courrier par mail à contact@tripluch.fr. Afin que le responsable du traitement des données puisse faire droit à sa demande, l’utilisateur peut être tenu de lui communiquer certaines informations telles que : ses noms et prénoms, son adresse e-mail ainsi que son numéro de compte, d’espace personnel ou d’abonné. Consultez le site cnil.fr pour plus d’informations sur vos droits."
        - 'heading "ARTICLE 6 : Conditions de modification de la politique de confidentialité" [level=3]'
        - text: /L’éditeur du site tripluch se réserve le droit de pouvoir modifier la présente Politique à tout moment afin d’assurer aux utilisateurs du site sa conformité avec le droit en vigueur\\. Les éventuelles modifications ne sauraient avoir d’incidence sur les achats antérieurement effectués sur le site, lesquels restent soumis à la Politique en vigueur au moment de l’achat et telle qu’acceptée par l’utilisateur lors de la validation de l’achat\\. L’utilisateur est invité à prendre connaissance de cette Politique à chaque fois qu’il utilise nos services, sans qu’il soit nécessaire de l’en prévenir formellement\\. La présente politique, éditée le \\d+\\/\\d+\\/\\d+, a été mise à jour le \\d+\\/\\d+\\/\\d+\\./
        `);
      //add contact and faq checks
})