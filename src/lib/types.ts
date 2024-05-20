export interface lableObject {
    image: string
    scores: number[]
    boxes: number[][]
    labels: string[]
    masks: string[]
    cat_id: string
    imagenet_label: string
    name: string
    cat_info: CatInfo[]
    mask_svgs: string[]
    maskSwitches: boolean[]
    id?:string
  }
  
  export interface CatInfo {
    cat_id: string
    imagenet_label: string
    namel: string
  }

  export type appStateType = 'intro'|'playing'|'about'
  export type gameStateType = 'guessing'|'failed'|'success'