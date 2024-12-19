const { createApp } = Vue;

createApp({
  template: `
    <div>
      <h1>Lista de Consolas</h1>
      <ul>
        <li v-for="consola in paginatedConsolas" :key="consola.id">
          <img :src="consola.imagen" :alt="consola.consola" width="100" height="100" />
          <div>
            <strong>{{ consola.consola }}</strong> ({{ consola.unidades_vendidas.toLocaleString() }} unidades vendidas)
            <br />
            Lanzamiento: {{ consola.fecha_lanzamiento }} | País: {{ consola.país }}
          </div>
        </li>
      </ul>

      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
        <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
      </div>
    </div>
  `,
  data() {
    return {
      consolas: [
        { id: 1, consola: "PlayStation 5", unidades_vendidas: 40_000_000, fecha_lanzamiento: 2020, país: "Japón", imagen: "img/playstation_5.webp" },
        { id: 2, consola: "Xbox Series X", unidades_vendidas: 25_000_000, fecha_lanzamiento: 2020, país: "Estados Unidos", imagen: "img/xbox_series_x.webp" },
        { id: 3, consola: "Nintendo Switch", unidades_vendidas: 140_000_000, fecha_lanzamiento: 2017, país: "Japón", imagen: "img/nintendo_switch.webp" },
        { id: 4, consola: "PlayStation 4", unidades_vendidas: 117_000_000, fecha_lanzamiento: 2013, país: "Japón", imagen: "img/playstation_4.webp" },
        { id: 5, consola: "Xbox One", unidades_vendidas: 50_000_000, fecha_lanzamiento: 2013, país: "Estados Unidos", imagen: "img/xbox_one.webp" },
        { id: 6, consola: "Nintendo Wii U", unidades_vendidas: 13_000_000, fecha_lanzamiento: 2012, país: "Japón", imagen: "img/nintendo_wii_u.webp" },
        { id: 7, consola: "PlayStation 3", unidades_vendidas: 87_000_000, fecha_lanzamiento: 2006, país: "Japón", imagen: "img/playstation_3.webp" },
        { id: 8, consola: "Xbox 360", unidades_vendidas: 85_000_000, fecha_lanzamiento: 2005, país: "Estados Unidos", imagen: "img/xbox_360.webp" },
        { id: 9, consola: "Nintendo DS", unidades_vendidas: 154_000_000, fecha_lanzamiento: 2004, país: "Japón", imagen: "img/nintendo_ds.webp" },
        { id: 10, consola: "PlayStation 2", unidades_vendidas: 155_000_000, fecha_lanzamiento: 2000, país: "Japón", imagen: "img/playstation_2.webp" },
        { id: 11, consola: "Game Boy", unidades_vendidas: 118_000_000, fecha_lanzamiento: 1989, país: "Japón", imagen: "img/game_boy.webp" },
        { id: 12, consola: "Nintendo 3DS", unidades_vendidas: 75_000_000, fecha_lanzamiento: 2011, país: "Japón", imagen: "img/nintendo_3ds.webp" },
        { id: 13, consola: "PlayStation Portable (PSP)", unidades_vendidas: 81_000_000, fecha_lanzamiento: 2004, país: "Japón", imagen: "img/playstation_portable.webp" },
        { id: 14, consola: "Xbox One X", unidades_vendidas: 2_000_000, fecha_lanzamiento: 2017, país: "Estados Unidos", imagen: "img/xbox_one_x.webp" },
        { id: 15, consola: "PlayStation Vita", unidades_vendidas: 15_000_000, fecha_lanzamiento: 2011, país: "Japón", imagen: "img/playstation_vita.webp" },
        { id: 16, consola: "Nintendo 64", unidades_vendidas: 33_000_000, fecha_lanzamiento: 1996, país: "Japón", imagen: "img/nintendo_64.webp" },
        { id: 17, consola: "Super Nintendo Entertainment System (SNES)", unidades_vendidas: 49_000_000, fecha_lanzamiento: 1990, país: "Japón", imagen: "img/snes.webp" },
        { id: 18, consola: "Mega Drive", unidades_vendidas: 29_000_000, fecha_lanzamiento: 1988, país: "Japón", imagen: "img/mega_drive.webp" },
        { id: 19, consola: "Neo Geo", unidades_vendidas: 1_000_000, fecha_lanzamiento: 1990, país: "Japón", imagen: "img/neo_geo.webp" },
        { id: 20, consola: "Sega Saturn", unidades_vendidas: 9_000_000, fecha_lanzamiento: 1994, país: "Japón", imagen: "img/sega_saturn.webp" },
        { id: 21, consola: "Game Boy Advance", unidades_vendidas: 81_000_000, fecha_lanzamiento: 2001, país: "Japón", imagen: "img/game_boy_advance.webp" },
        { id: 22, consola: "Dreamcast", unidades_vendidas: 9_000_000, fecha_lanzamiento: 1999, país: "Japón", imagen: "img/dreamcast.webp" },
        { id: 23, consola: "Wii", unidades_vendidas: 101_000_000, fecha_lanzamiento: 2006, país: "Japón", imagen: "img/wii.webp" },
        { id: 24, consola: "PlayStation", unidades_vendidas: 102_000_000, fecha_lanzamiento: 1994, país: "Japón", imagen: "img/playstation_original.webp" },
        { id: 25, consola: "Xbox", unidades_vendidas: 24_000_000, fecha_lanzamiento: 2001, país: "Estados Unidos", imagen: "img/xbox_original.webp" },
        { id: 26, consola: "Nintendo GameCube", unidades_vendidas: 22_000_000, fecha_lanzamiento: 2001, país: "Japón", imagen: "img/nintendo_gamecube.webp" },
        { id: 27, consola: "Atari 2600", unidades_vendidas: 30_000_000, fecha_lanzamiento: 1977, país: "Estados Unidos", imagen: "img/atari_2600.webp" },
        { id: 28, consola: "Sega Genesis", unidades_vendidas: 29_000_000, fecha_lanzamiento: 1988, país: "Japón", imagen: "img/sega_genesis.webp" },
        { id: 29, consola: "Intellivision", unidades_vendidas: 3_000_000, fecha_lanzamiento: 1979, país: "Estados Unidos", imagen: "img/intellivision.webp" }
      ],
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.consolas.length / this.itemsPerPage);
    },
    paginatedConsolas() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.consolas.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
}).mount('#app');
