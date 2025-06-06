import { Typography } from "@alfalab/core-components/typography";
import moai from "../assets/img.png";
import { thxSt } from "./style.css";
import { useEffect } from "react";

export const ThxLayout = ({ currentSlide }: { currentSlide: number }) => {
  useEffect(() => {
    if (currentSlide === 0) {
      window.gtag("event", "3996_end_page_view_like_var2");
    }

    if (currentSlide === 1) {
      window.gtag("event", "3996_end_page_view_smart_var2");
    }
  }, []);

  return (
    <>
      <div className={thxSt.container}>
        <img
          alt="Картинка ракеты"
          src={moai}
          width={250}
          className={thxSt.rocket}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="large"
          defaultMargins
          weight="bold"
        >
          Только тссс
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium">
          Вы поучаствовали в очень важном исследовании, которое поможет улучшить
          продукт. Вы – наш герой!
        </Typography.Text>
      </div>
    </>
  );
};
