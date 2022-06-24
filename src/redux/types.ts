export interface Movies {
   loading: boolean;
   moviesPopular: [];
   moviesUpComing: [];
   moviesTopRated: [];
   moviesNowPlaying: [];
   resultMoviesSearch: [];
   genders: [];
   error: boolean;
   modal: boolean;
   modalSearch: boolean;
   contentModal: ContentModal;
   showNavigation: boolean;
   activeNavigationMobile: boolean;
   themeDark: boolean;
}

interface ContentModal {
   id: number;
   img: string;
   title: string;
   overview: string;
   date: string;
}
