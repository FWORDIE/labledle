// export interface lableObject {
//     image: string
//     scores: number[]
//     boxes: number[][]
//     labels: string[]
//     masks: string[]
//     cat_id: string
//     imagenet_label: string
//     name: string
//     cat_info: CatInfo[]
//     mask_svgs: string[]
//     maskSwitches: boolean[]
//     id?:string
//   }
  
//   export interface CatInfo {
//     cat_id: string
//     imagenet_label: string
//     namel: string
//   }

  export type appStateType = 'intro'|'playing'|'about'
  export type gameStateType = 'guessing'|'failed'|'success'

  export interface Cat {
    name: string;
    cats: CatsEntity[] ;
    code: string;
    files: FilesEntity[];
    id?:string

  }
  export interface CatsEntity {
	id?: string;
    name: string;
    code: string;
  }
  export interface FilesEntity {
    image: Image;
    objects: ObjectsEntity[];
  }
  export interface Image {
    footnote_top_right: string;
    url: string;
    footnote: string;
    footnote_bottom_right: string;
  }
  export interface ObjectsEntity {
    category: string;
    segmentation: string;
  }
  
  export type gameTypeType = 'daily' | 'free play'