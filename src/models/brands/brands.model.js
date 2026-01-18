const brands = [
  {
    brand_id: "1",
    brand_name: "Sushi Tei",
    brand_code: "SUSHI_TEI",
    brand_primary_color: "#006e43",
    brand_bg_color: "#006e43",
    brand_logo_url: "",
    brand_mascot_assets: "assets/images/mascot/mascot_sti.webp",
    brand_logo_assets: "assets/images/logo/logo-st.png",
    brand_logo_white_assets: "assets/images/logo/white/logo-st-white.png",
    brand_api_base_url: "https://api.sushitei.com"
  },
  {
    brand_id: "2",
    brand_name: "Tom Sushi",
    brand_code: "TOM_SUSHI",
    brand_primary_color: "#9F1D20",
    brand_bg_color: "#9F1D20",
    brand_logo_url: "",
    brand_mascot_assets: "assets/images/mascot/mascot_ts.webp",
    brand_logo_assets: "assets/images/logo/logo-ts.png",
    brand_logo_white_assets: "assets/images/logo/white/logo-ts-white.png",
    brand_api_base_url: "https://api.tomsushi.com"
  },
  {
    brand_id: "3",
    brand_name: "Hokkaido-Ya",
    brand_code: "HOKKAIDO_YA",
    brand_primary_color: "#00629B",
    brand_bg_color: "#00629B",
    brand_logo_url: "",
    brand_mascot_assets: "assets/images/mascot/mascot_hky.webp",
    brand_logo_assets: "assets/images/logo/logo-hky.png",
    brand_logo_white_assets: "assets/images/logo/white/logo-hky-white.png",
    brand_api_base_url: "https://api.hokkaidoya.com"
  },
  {
    brand_id: "4",
    brand_name: "Yoka Yoka",
    brand_code: "YOKA_YOKA",
    brand_primary_color: "#1E1E1E",
    brand_bg_color: "#1E1E1E",
    brand_logo_url: "",
    brand_mascot_assets: "assets/images/mascot/mascot_yk.webp",
    brand_logo_assets: "assets/images/logo/logo-yky.png",
    brand_logo_white_assets: "assets/images/logo/white/logo-yky-white.png",
    brand_api_base_url: "https://api.yokayoka.com"
  },
  {
    brand_id: "5",
    brand_name: "First Filled",
    brand_code: "FIRST_FILLED",
    brand_primary_color: "#AC7644",
    brand_bg_color: "#4E341B",
    brand_logo_url: "",
    brand_mascot_assets: "assets/images/mascot/mascot_ff.webp",
    brand_logo_assets: "assets/images/logo/logo-ff.png",
    brand_logo_white_assets: "assets/images/logo/white/logo-ff-white.png",
    brand_api_base_url: "https://api.firstfilled.com"
  }
];

const brandsModel = {
  async getAll() {
    return brands;
  },

  async getById(id) {
    return brands.find(b => b.brand_id === String(id)) || null;
  }
};

module.exports = brandsModel;
