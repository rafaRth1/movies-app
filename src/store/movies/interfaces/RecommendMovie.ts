// Generated by https://quicktype.io

export interface InterfaceRecommendMovie {
	page: number;
	results: RecommendMovie[];
	total_pages: number;
	total_results: number;
}

export interface RecommendMovie {
	adult: boolean;
	backdrop_path: string;
	id: number;
	title: string;
	original_language: OriginalLanguage;
	original_title: string;
	overview: string;
	poster_path: string;
	media_type: MediaType;
	genre_ids: number[];
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export enum MediaType {
	Movie = 'movie',
}

export enum OriginalLanguage {
	De = 'de',
	En = 'en',
	Fi = 'fi',
}