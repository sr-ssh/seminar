import { LocalizerPropsType } from './Localizer.model';
import { useGlobalLocales } from './useGlobalLocales';

export const Localizer = ({ localeKey, params }: LocalizerPropsType) => {
  const { convertLocale } = useGlobalLocales();

  return convertLocale({ key: localeKey, params }).element;
};
