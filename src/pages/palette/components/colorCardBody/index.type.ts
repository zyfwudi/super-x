export interface ColorCardBodyClasses {
  colorCardBody: string,
  colorCardItem: string,
  showItem: string,
  colorCardItemKey: string,
  colorCardItemTitle: string,
  colorCardItemContrast: string,
  colorCardItemValue: string,
}

export interface ColorCardBodyProps {

}

export interface ColorCardItemProps {
  contrast?: string;
  keygen?: string;
  value?: string;
  index: number;
}