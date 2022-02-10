export interface ICalcTransitionStateParams {
  contentRef: React.MutableRefObject<HTMLDivElement>;
  classPrefix: String;
  expandAnimation: boolean;
}

const calcTransitionState = ({ contentRef, classPrefix, expandAnimation }: ICalcTransitionStateParams) => {
  const popupAnimationClassPrefix = expandAnimation
    ? `${classPrefix}-popup--animation-expand`
    : `${classPrefix}-popup--animation`;

  return {
    timeout: 0,
    nodeRef: contentRef,
    // 与公共 className 保持一致
    classNames: {
      appear: `${popupAnimationClassPrefix}-enter ${popupAnimationClassPrefix}-enter-active`,
      appearActive: `${popupAnimationClassPrefix}-enter-active`,
      appearDone: `${popupAnimationClassPrefix}-enter-active ${popupAnimationClassPrefix}-enter-to`,
      exit: `${popupAnimationClassPrefix}-leave ${popupAnimationClassPrefix}-leave-active`,
      exitActive: `${popupAnimationClassPrefix}-leave-active`,
      exitDone: `${popupAnimationClassPrefix}-leave-active ${popupAnimationClassPrefix}-leave-to`,
    },
  };
};

export default calcTransitionState;
