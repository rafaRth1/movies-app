export interface Movies {
   loading: boolean;
   moviesPopular: [];
   moviesUpComing: [];
   moviesTopRated: [];
   error: boolean;
   modal: boolean;
   contentModal: ContentModal;
   showNavigation: boolean;
}

interface ContentModal {
   id: number;
   img: string;
   title: string;
   overview: string;
   date: string;
}
