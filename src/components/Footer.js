import "./Footer.css";

export default function Footer() {
    return (
        <footer className="Footer">
            <div className="Footer-references Footer-row">
                Haut-commissariat au Plan du Maroc (2019). 
                <cite title="Demographic and socio-economic data of the municipal population of Morocco according to the General Census of Population and Housing of 2014">
                    Les données démographiques et socio-économiques de la population municipale du Maroc selon le Recensement général de la population et de l'habitat de 2014.
                </cite>
                Public Use Microdata File (PUMF). Web. 
                <a href="https://www.hcp.ma/Recensement-General-de-la-Population-et-de-l-Habitat-RGPH-2014_a2945.html">https://www.hcp.ma/Recensement-General-de-la-Population-et-de-l-Habitat-RGPH-2014_a2945.html</a>
            </div>

            <div className="Footer-row">
                Morocco region and province map data from <a href="https://github.com/yousfiSaad/morocco-map">yousfiSaad/morocco-map</a>
            </div>

            <div className="Footer-credits Footer-row">
                Made with <span role="img" aria-label="love">❤️</span> by <a href="https://robch.io">Rob Chiocchio</a>
            </div>

            <div className="Footer-license Footer-row">
                This project is licensed under <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU General Public License v3.0</a>
            </div>
        </footer>
    );
}