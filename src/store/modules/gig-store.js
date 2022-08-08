import { gigService } from "../../services/gig-service";

export default {
  state: {
    gigs: null,
    categories: [
      {
        name: "Logo Design",
        type: "logos",
        txt: "Build your brand",
        icon: "logo.png",
        img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png",
      },
      {
        name: "WordPress",
        type: "logos",
        txt: "Customize your site",
        icon: "wordpress.png",
        img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png",
      },
      {
        name: "Voice Over",
        type: "logos",
        txt: "Share your message",
        icon: "voice.png",
        img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png",
      },
      {
        name: "Video Explainer",
        type: "logos",
        txt: "Engage your audience",
        icon: "video.png",
        img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png",
      },
      {
        name: "Social Media",
        type: "logos",
        txt: "Reach more customers",
        icon: "social-media.png",
        img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png",
      },
      {
        name: "SEO",
        type: "logos",
        txt: "Unlock growth online",
        icon: "seo.png",
        img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png",
      },
      {
        name: "Illustration",
        type: "logos",
        txt: "Color your dreams",
        icon: "illustration.png",
        img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png",
      },
      {
        name: "Translation",
        type: "logos",
        txt: "Go global",
        icon: "translate.png",
        img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png",
      },
      {
        name: "Data Entry",
        type: "logos",
        txt: "Learn your business",
        icon: "data.png",
        img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png",
      },
      {
        name: "Book Covers",
        type: "logos",
        txt: "Showcase your story",
        icon: "books.png",
        img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png",
      },
    ],
    filterBy: { category: "" },
  },
  getters: {
    gigsToShow({ gigs }) {
      return gigs;
    },
    categoriesToShow({ categories }) {
      return categories;
    },
    getCategory({ filterBy }) {
      return filterBy;
    },
  },
  mutations: {
    setGigs(state, { gigs }) {
      state.gigs = gigs;
    },
    setCategory(state, { category }) {
      // const currCategory = state.categories.find(
      //   (_category) => category.category === _category.name
      // );
      state.filterBy.category = category.category;
    },
    setFilterBy(state, { filterBy }) {
      console.log("filterBy", filterBy);

      const filter = Object.keys(filterBy);
      state.filterBy[filter[0]] = Object.values(filterBy)[0];
      if (filter[1]) state.filterBy[filter[1]] = Object.values(filterBy)[1];
    },
    sortBy(state, { filterBy }) {
      state.filterBy.sort = filterBy;
      console.log("state.filterBy", state.filterBy);
    },
  },
  actions: {
    async loadGigs({ commit, state }) {
      try {
        const gigs = await gigService.query(state.filterBy);
        commit({ type: "setGigs", gigs });
      } catch (error) {
        console.log(error, "err in gig-store");
      }
    },
  },
};
