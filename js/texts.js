let TEXTS = {
    "fr":{
        "title":'Produit de convolution',
        "switchLanguage":'<b>EN</b>',
        "buttons":{
            "introduction":"Introduction",
            "example1":"Exemple 1",
            "example2":"Exemple 2",
            "example3":"Exemple 3",
        },
        "subject":"Sujet <i class=\"fas fa-chevron-up\"></i>",
        "footer":"Réalisé par <a href=\"https://www.linkedin.com/in/sebastien-kerroue/\" target=\"_blank\">Sébastien Kerroué</a> pour <a href=\"https://www.efrei.fr\" target=\"_blank\"><img id='logo' src='img/logo.png' alt=''></a>",
        "introduction":"<b><i class=\"fas fa-chevron-circle-right\"></i> Définition :</b><br><br>Le produit de convolution, noté « ∗ » est un produit qui fait correspondre à deux fonctions f et g la fonction s(t) définie comme suit : $$  s(t) = f(t) * g(t) = \\int_{-\\infty}^{\\infty} f(τ) . g(t-τ) . dτ = \\int_{-\\infty}^{\\infty} g(τ) . f(t-τ) . dτ $$ <br><br><b><i class=\"fas fa-chevron-circle-right\"></i> Pour calculer un produit de convolution :</b><br><br><ul><li>Tout d'abord on trace la courbe de la première fonction en fonction de τ .</li><li>Les fonctions sont les variables de τ et de -τ. Ainsi, il faut renverser l'axe horizontal pour une des deux fonctions et décaler de t.</li><li>Une fois cela fait, nous cherchons à déplacer la seconde courbe sur l'axe des abscisses de -∞ à +∞ pour identifier les différents cas possibles.</li><li>Dans chaque cas, il faut calculer une intégrale telle que définie plus haut.</li></ul><br>Exemple de la convolution d'une porte sur elle même :",
        "example_1":{
            "subject":'On considère la fonction f(t) définie par : $$ f(t) = 1 \\ \\ \\ \\ \\ ∀t ∈ [-T , +T] $$ $$ f(t) = 0 \\ \\ \\ \\ \\ ∀t ∈ ]-∞ , -T [ U ]+T , +∞[ $$  Déterminer le produit de convolution z(t) = f(t) * f(t)',
            "nb_steps":6,
            "step_1":{
                "response":"La 2ème fonction étant identique à la 1ère, on la renverse sur l'axe des abscisses et on la décale de t afin de la promener sur le temps.",
                "tip":"Représentation graphique de f(t)."
            },
            "step_2":{
                "response":"La seconde courbe est renversée et décalée de t. Nous sommes ici dans la situation où :<span class=\'pre\'>$$ t + T < -T \\ \\ donc \\ \\ t < -2T $$</span>Le produit des deux fonctions est nul donc le résultat de l'intégrale est nul :<span class=\'pre\'>$$ z(t) = 0 $$</span>",
                "tip":"NO_TIP"
            },
            "step_3":{
                "response":"On continue à promener la 2ème porte sur l'axe des abscisses et on distingue la situation suivante :<span class=\'pre\'>$$ t - T < -T \\ \\ et \\ \\  t + T > -T \\ \\ donc \\ \\ -2T < t < 0 $$</span>$$ z(t) = \\int_{-T}^{t+T} 1dt $$ $$ z(t) = \\big[ t ]^{t+T}_{-T} $$ Ce qui nous donne :<span class=\'pre\'>$$ z(t) = t+2T $$</span>",
                "tip":"NO_TIP"
            },
            "step_4":{
                "response":"On continue à promener la seconde porte sur l'axe des abscisses et nous distinguons la situation où : <span class=\'pre\'>$$ t - T < T  \\ \\  et  \\ \\  t + T > T  \\ \\  donc   \\ \\ 0 < t < 2T $$</span>$$ z(t) = \\int_{t-T}^{T} 1dt $$ $$ z(t) = \\big[ t ]^{T}_{t-T} $$ Ce qui nous donne :<span class=\'pre\'>$$ z(t) = 2T - t $$</span>",
                "tip":"NO_TIP"
            },
            "step_5":{
                "response":"On continue toujours à promener la seconde porte sur l'axe des abscisses et on remarque la situation où : <span class=\'pre\'>$$ t - T > T  \\ \\  donc  \\ \\  t > 2T $$</span> Le produit des deux fonctions est nul donc le résultat de l'intégrale est nul :<span class=\'pre\'>$$ z(t) = 0 $$</span>",
                "tip":"NO_TIP"
            },
            "step_6":{
                "response":"Récapitulatif des résultats : <span class=\'pre\'>$$ t < -2T, z(t) = 0 $$ $$ -2T < t < 0, z(t) = t + 2T $$ $$ 0 < t < 2T, z(t) = 2T - t $$ $$ t > 2T, z(t) = 0 $$</span>",
                "tip":"NO_TIP"
            }
        },
        "example_2":{
            "subject":"On considère les fonctions f(t) et g(t) définies par : $$ f(t) = 1 \\ \\ \\ \\ \\ ∀t ∈ [-T , +T] \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ f(t) = 0  \\ \\ \\ \\ \\  ∀t ∈ ]-∞ , -T [ U ]+T , +∞[ $$ $$ g(t) = e^{-t/θ} \\ \\ \\ \\ \\ ∀t ≥ 0 \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ g(t) = 0 \\ \\ \\ \\ \\ ∀t < 0 $$ Déterminer le produit de convolution z(t) = f(t) * g(t) au moyen de représentations graphiques judicieusement esquissées",
            "nb_steps":5,
            "step_1":{
                "response":"Par soucis de simplicité, le produit de convolution étant commutatif, on ne retourne pas la fonction exponentielle, on la laisse telle quelle. Ainsi, nous n'aurions qu'à retourner la fonction porte f(t) sur elle-même (car la fonction est paire) et la décaler de t afin de la premener sur tout l'espace du temps.",
                "tip":"Rappelons l'allure de la courbe représentative de g(t)"
            },
            "step_2":{
                "response":"On a donc retourné la fonction porte et on la déplace sur l'axe des abscisses. On remarque alors le cas où : <span class=\'pre\'>$$ t + T < 0 \\ \\  donc \\ \\ t < -T $$</span>Ce qui nous donne :<span class=\'pre\'>$$ z(t) = 0 $$</span>",
                "tip":"NO_TIP"
            },
            "step_3":{
                "response":"On continue de déplacer la porte sur l'axe des abscisses. Ici, nous remarquons la situation où que les deux courbes ont pour la première fois une partie de leur aire en commun sur le même intervalle. Nous remarquons la situation suivante :<span class=\'pre\'>$$ t - T < 0 \\ \\  et \\ \\ t + T > 0 \\ \\  donc \\ \\ -T < t < T $$</span>Puis, nous calculons en appliquant la formule du cours. Ce qui nous donne : $$ z(t) = \\int_{0}^{t+T} e^{-τ/θ}dτ $$ $$ z(t) = \\big[ -θ . e^{-(τ+T)/θ}\\big]^{t+T}_{0} $$ $$ z(t) = -θ (e^{-(t+T)/θ} - 1) $$ $$ z(t) = θ (1 - e^{-(t+T)/θ} ) $$ ",
                "tip":"NO_TIP"
            },
            "step_4":{
                "response":"Comme lors des étapes précédentes, on déplace encore la porte sur l'axe des abscisses. Et nous distinguons la situation telle que :<span class=\'pre\'>$$ t - T > 0 \\ \\  donc \\ \\ t > T $$</span>Ce qui donne : $$ z(t) = \\int_{t-T}^{t+T} e^{-τ/θ}dτ $$ $$ z(t) = \\big[ -θ . e^{-(τ+T)/θ}\\big]^{t+T}_{t-T} $$ $$ z(t) = -θ (e^{-(t+T)/θ} - e^{-(t-T)/θ}) $$ $$ z(t) = -θ.e^{-t/θ}(e^{-T/θ} - e^{T/θ}) $$ $$ z(t) = θ.e^{-t/θ}(e^{T/θ} - e^{-T/θ}) $$",
                "tip":"NO_TIP"
            },
            "step_5":{
                "response":"Récapitulatif des résultats : <span class=\'pre\'>$$ t < -T, z(t) = 0 $$ $$ -T < t < T, z(t) = θ (1 - e^{-(t+T)/θ} ) $$ $$ t > T, z(t) = θ.e^{-t/θ}(e^{T/θ} - e^{-T/θ}) $$</span>",
                "tip":"NO_TIP"
            }
        },
        "example_3":{
            "subject":"On considère les fonctions f(t) et g(t) définies par : $$ f(t) = 1 \\ \\ \\ \\ \\ ∀t > 0 \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ f(t) = 0  \\ \\ \\ \\ \\  ∀t < 0 $$ $$ g(t) = e^{-t/θ} \\ \\ \\ \\ \\ ∀t ∈ R $$ Déterminer le produit de convolution z(t) = f(t) * g(t) au moyen de représentations graphiques judicieusement esquissées",
            "nb_steps":4,
            "step_1":{
                "response":"Par soucis de simplicité, le produit de convolution étant commutatif, on ne retourne pas la fonction exponentielle, on la laisse telle quelle. On retourne plutôt la fonction de heaviside car elle sera plus simple à déplacer sur l'axe des abscisses et pour effectuer les calculs.",
                "tip":"NO_TIP"
            },
            "step_2":{
                "response":"Nous retournons la fonction de heaviside et nous déplaçons de t. Nous promenons de -∞ à +∞ pour calculer à chaque étape la valeur de l'intégrale. Nous distinguons en premier lieu :<span class=\'pre\'>$$ t < 0 $$</span>Ce qui nous donne :<span class=\'pre\'>$$ z(t) = 0 $$</span>",
                "tip":"NO_TIP"
            },
            "step_3":{
                "response":"Nous continuons de balader la fonction f(t) sur l'axe des abscisses et nous distinguons le cas où :<span class=\'pre\'>$$ t > 0 $$</span>Ici, le calcul du produit de convolution donne : $$ z(t) = \\int_{0}^{t} e^{-τ/θ}dτ $$ $$ z(t) = \\big[ -θ . e^{-(τ/θ)}\\big]^{t}_{0} = -θ \\big[ e^{-(τ/θ)}\\big]^{t}_{0} $$ $$ z(t) = -θ (e^{-(t/θ)} - 1) $$ $$ z(t) = θ (1-e^{-(t/θ)}) $$",
                "tip":"NO_TIP"
            },
            "step_4":{
                "response":"Récapitulatif des résultats : <span class=\'pre\'>$$ t < 0, z(t) = 0 $$ $$ t > 0, z(t) = θ (1-e^{-(t/θ)}) $$</span>",
                "tip":"NO_TIP"
            }
        }
    },
}
