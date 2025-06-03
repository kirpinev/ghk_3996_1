import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import icon5 from "./assets/icon5.png";
import icon6 from "./assets/icon6.png";
import icon7 from "./assets/icon7.png";
import icon8 from "./assets/icon8.png";
import icon9 from "./assets/icon9.png";
import icon10 from "./assets/icon10.png";
import icon11 from "./assets/icon11.png";
import icon12 from "./assets/icon12.png";
import icon13 from "./assets/icon13.png";
import icon14 from "./assets/icon14.png";
import icon15 from "./assets/icon15.png";
import icon16 from "./assets/icon16.png";
import icon17 from "./assets/icon17.png";
import icon99 from "./assets/icon99.png";

import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export const App = () => {
  const [step, setStep] = useState(0);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClickStepZero = () => {
    if (currentSlide === 0) {
      window.gtag("event", "3996_click_like_var2");
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
    } else {
      window.gtag("event", "3996_click_smart_var2");
      setStep(1);
    }
  };

  const handleClickStepOne = () => {
    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
  };

  useEffect(() => {
    if (step === 1) {
      window.gtag("event", "3996_page_view_smart_benefit_var2");
    }

    if (step === 0) {
      window.gtag("event", "3996_page_view_choose_sim_var2");
    }
  }, [step]);

  if (thxShow) {
    return <ThxLayout currentSlide={currentSlide} />;
  }

  return (
    <>
      {step === 0 && (
        <div className={appSt.container}>
          <Gap size={20} />
          <div style={{ width: "100%" }}>
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
              spaceBetween={8}
              slidesPerView="auto"
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            >
              <SwiperSlide
                style={{
                  width: "296px",
                  marginLeft: "32px",
                }}
              >
                <div className={appSt.cardContainer}>
                  <div className={appSt.header}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography.TitleResponsive
                        font="system"
                        tag="h3"
                        view="medium"
                        className={appSt.productsTitle}
                        style={{ fontSize: "26px" }}
                      >
                        Лайк
                      </Typography.TitleResponsive>
                      <img src={image1} alt="" width={96} height={96} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        style={{
                          padding: "2px 6px",
                          backgroundColor: "#E4E4FB47",
                          borderRadius: "16px",
                          width: "max-content",
                        }}
                      >
                        <Typography.Text
                          tag="p"
                          view="primary-small"
                          style={{ marginBottom: 0, color: "white" }}
                        >
                          Первые 30 дней за 0 ₽
                        </Typography.Text>
                      </div>
                      <Typography.TitleResponsive
                        font="system"
                        tag="h2"
                        view="large"
                        className={appSt.productsTitle}
                        style={{ fontSize: "30px" }}
                      >
                        600 ₽
                      </Typography.TitleResponsive>
                      <Gap size={24} />
                    </div>
                  </div>
                  <div className={appSt.footer}>
                    <Gap size={40} />
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <Typography.TitleResponsive
                        font="system"
                        tag="h2"
                        view="large"
                        style={{ fontSize: "30px" }}
                      >
                        50{" "}
                        <span
                          style={{ fontSize: "16px", fontWeight: "normal" }}
                        >
                          ГБ
                        </span>
                      </Typography.TitleResponsive>
                      <Typography.TitleResponsive
                        font="system"
                        tag="h2"
                        view="large"
                        style={{ fontSize: "30px" }}
                      >
                        500{" "}
                        <span
                          style={{ fontSize: "16px", fontWeight: "normal" }}
                        >
                          мин
                        </span>
                      </Typography.TitleResponsive>
                      <Typography.TitleResponsive
                        font="system"
                        tag="h2"
                        view="large"
                        style={{ fontSize: "30px" }}
                      >
                        50{" "}
                        <span
                          style={{ fontSize: "16px", fontWeight: "normal" }}
                        >
                          смс
                        </span>
                      </Typography.TitleResponsive>
                    </div>
                    <Gap size={16} />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <img src={icon1} alt="" width={32} height={32} />
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Typography.Text
                            tag="p"
                            view="primary-small"
                            style={{ marginBottom: 0 }}
                          >
                            Кэшбэк за первое пополнение баланса
                          </Typography.Text>
                          <Typography.Text
                            tag="p"
                            view="primary-small"
                            color="secondary"
                            style={{ marginBottom: 0 }}
                          >
                            Пополните баланс, а мы вернём 100% от суммы
                          </Typography.Text>
                        </div>
                      </div>
                      <Gap size={4} />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <img src={icon2} alt="" width={32} height={32} />
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Typography.Text
                            tag="p"
                            view="primary-small"
                            style={{ marginBottom: 0 }}
                          >
                            Безлимитные мессенджеры и соцсети
                          </Typography.Text>
                          <Typography.Text
                            tag="p"
                            view="primary-small"
                            color="secondary"
                            style={{ marginBottom: 0 }}
                          >
                            Не расходуют гигабайты тарифа, чтобы вы всегда
                            оставались на связи с близкими
                          </Typography.Text>
                        </div>
                      </div>
                      <Gap size={4} />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <img src={icon3} alt="" width={32} height={32} />
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Typography.Text
                            tag="p"
                            view="primary-small"
                            style={{ marginBottom: 0 }}
                          >
                            Защита от спама, мошенников
                          </Typography.Text>
                          <Typography.Text
                            tag="p"
                            view="primary-small"
                            color="secondary"
                            style={{ marginBottom: 0 }}
                          >
                            Все нежелательные звонки будут автоматически
                            переадресованы на голосового ассистента
                          </Typography.Text>
                        </div>
                      </div>
                    </div>
                    <div style={{ height: "44px" }}></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "328px",
                  paddingRight: "32px",
                }}
              >
                <div className={appSt.cardContainer}>
                  <div
                    className={appSt.header}
                    style={{ backgroundColor: "#69F026" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", gap: "4px" }}>
                        <Typography.TitleResponsive
                          font="system"
                          tag="h3"
                          view="medium"
                          className={appSt.productsTitle}
                          style={{ fontSize: "26px", color: "black" }}
                        >
                          Смарт
                        </Typography.TitleResponsive>
                        <img
                          src={icon99}
                          alt=""
                          width={32}
                          height={32}
                          style={{ marginTop: "13px" }}
                        />
                      </div>

                      <img src={image2} alt="" width={96} height={96} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        style={{
                          padding: "2px 6px",
                          backgroundColor: "#1E2B4414",
                          borderRadius: "16px",
                          width: "max-content",
                        }}
                      >
                        <Typography.Text
                          tag="p"
                          view="primary-small"
                          style={{ marginBottom: 0 }}
                        >
                          С подпиской Альфа-Смарт
                        </Typography.Text>
                      </div>
                      <Typography.TitleResponsive
                        font="system"
                        tag="h2"
                        view="large"
                        className={appSt.productsTitle}
                        style={{ fontSize: "30px", color: "black" }}
                      >
                        0 ₽{" "}
                        <span
                          style={{
                            textDecoration: "line-through",
                            fontSize: "14px",
                            fontWeight: "normal",
                          }}
                        >
                          400 ₽
                        </span>
                      </Typography.TitleResponsive>
                      <div style={{ height: "18px" }}></div>
                    </div>
                  </div>
                  <div className={appSt.footer}>
                    <Gap size={40} />
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <Typography.TitleResponsive
                        font="system"
                        tag="h2"
                        view="large"
                        style={{ fontSize: "30px" }}
                      >
                        3{" "}
                        <span
                          style={{ fontSize: "16px", fontWeight: "normal" }}
                        >
                          ГБ
                        </span>
                      </Typography.TitleResponsive>
                      <Typography.TitleResponsive
                        font="system"
                        tag="h2"
                        view="large"
                        style={{ fontSize: "30px" }}
                      >
                        100{" "}
                        <span
                          style={{ fontSize: "16px", fontWeight: "normal" }}
                        >
                          мин
                        </span>
                      </Typography.TitleResponsive>
                      <Typography.TitleResponsive
                        font="system"
                        tag="h2"
                        view="large"
                        style={{ fontSize: "30px" }}
                      >
                        10{" "}
                        <span
                          style={{ fontSize: "16px", fontWeight: "normal" }}
                        >
                          смс
                        </span>
                      </Typography.TitleResponsive>
                    </div>
                    <Gap size={16} />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <img src={icon4} alt="" width={32} height={32} />
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Typography.Text
                            tag="p"
                            view="primary-small"
                            style={{ marginBottom: 0 }}
                          >
                            Безлимитные мессенджеры и соцсети
                          </Typography.Text>
                          <Typography.Text
                            tag="p"
                            view="primary-small"
                            color="secondary"
                            style={{ marginBottom: 0 }}
                          >
                            Не расходуют гигабайты тарифа, чтобы вы всегда
                            оставались на связи с близкими
                          </Typography.Text>
                        </div>
                      </div>
                      <Gap size={4} />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <img src={icon5} alt="" width={32} height={32} />
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Typography.Text
                            tag="p"
                            view="primary-small"
                            style={{ marginBottom: 0 }}
                          >
                            Привилегии Альфа-Смарт
                          </Typography.Text>
                          <Typography.Text
                            tag="p"
                            view="primary-small"
                            color="secondary"
                            style={{ marginBottom: 0 }}
                          >
                            Лучшие условия обслуживания и привилегии при
                            оформлении подписки Альфа-Смарт
                          </Typography.Text>
                        </div>
                      </div>
                      <Gap size={4} />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <img src={icon6} alt="" width={32} height={32} />
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Typography.Text
                            tag="p"
                            view="primary-small"
                            style={{ marginBottom: 0 }}
                          >
                            Защита от спама, мошенников
                          </Typography.Text>
                          <Typography.Text
                            tag="p"
                            view="primary-small"
                            color="secondary"
                            style={{ marginBottom: 0 }}
                          >
                            Все нежелательные звонки будут автоматически
                            переадресованы на голосового ассистента
                          </Typography.Text>
                        </div>
                      </div>
                    </div>
                    <div style={{height: "44px"}}></div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}

      {step === 1 && (
        <div
          className={appSt.container}
          style={{ backgroundColor: "white", padding: "0 16px" }}
        >
          <Gap size={24} />
          <div className={appSt.box}>
            <img src={image3} alt="" />
            <Gap size={16} />
            <Typography.TitleResponsive
              font="system"
              tag="h3"
              view="small"
              style={{
                fontWeight: "normal",
                width: "300px",
                textAlign: "center",
                margin: "0 auto",
              }}
            >
              Тариф за 0 ₽ с подпиской Альфа-&nbsp;Смарт
            </Typography.TitleResponsive>
            <Typography.Text
              tag="p"
              view="primary-medium"
              color="secondary"
              style={{
                marginBottom: 0,
                width: "300px",
                textAlign: "center",
                margin: "0 auto",
              }}
            >
              Пока подписка активна, тариф Смарт будет бесплатным
            </Typography.Text>
          </div>
          <Gap size={16} />
          <div
            style={{
              border: "2px solid #F3F4F5",
              borderRadius: "24px",
              padding: "16px",
              textAlign: "center",
            }}
          >
            <Typography.Text
              tag="p"
              view="primary-medium"
              style={{
                margin: 0,
              }}
            >
              Первый месяц подписки — 0&nbsp;₽, затем 399&nbsp;₽ в месяц
            </Typography.Text>
          </div>
          <Gap size={16} />
          <Gap size={24} />
          <Typography.TitleResponsive font="system" tag="h3" view="medium">
            Привилегии Альфа-Смарт
          </Typography.TitleResponsive>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              paddingTop: "30px",
            }}
          >
            <img src={icon7} alt="" width={48} height={48} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                tag="p"
                view="primary-large"
                style={{
                  margin: 0,
                }}
              >
                +1 топовая категория с кэшбэком 5%
              </Typography.Text>
              <Gap size={4} />
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{
                  margin: 0,
                }}
                color="secondary"
              >
                Дополнительная категория каждый месяц
              </Typography.Text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              paddingTop: "24px",
            }}
          >
            <img src={icon8} alt="" width={48} height={48} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                tag="p"
                view="primary-large"
                style={{
                  margin: 0,
                }}
              >
                +1 попытка крутить барабан суперкэшбэка
              </Typography.Text>
              <Gap size={4} />
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{
                  margin: 0,
                }}
                color="secondary"
              >
                Выше шанс выиграть до 100% в случайной категории
              </Typography.Text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              paddingTop: "24px",
            }}
          >
            <img src={icon9} alt="" width={48} height={48} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                tag="p"
                view="primary-large"
                style={{
                  margin: 0,
                }}
              >
                Эксклюзивный кэшбэк от партнёров
              </Typography.Text>
              <Gap size={4} />
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{
                  margin: 0,
                }}
                color="secondary"
              >
                Доступ к особой подборке
              </Typography.Text>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              paddingTop: "16px",
            }}
          >
            <img src={icon10} alt="" width={48} height={48} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                tag="p"
                view="primary-large"
                style={{
                  margin: 0,
                }}
              >
                Увеличенный лимит кэшбэка
              </Typography.Text>
              <Gap size={4} />
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{
                  margin: 0,
                }}
                color="secondary"
              >
                7 000 ₽ в категориях, 10 000 ₽ или миль в сервисах Альфа-Банка
              </Typography.Text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              paddingTop: "24px",
            }}
          >
            <img src={icon11} alt="" width={48} height={48} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                tag="p"
                view="primary-large"
                style={{
                  margin: 0,
                }}
              >
                +3% годовых
              </Typography.Text>
              <Gap size={4} />
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{
                  margin: 0,
                }}
                color="secondary"
              >
                По накопительному Альфа-Счёту на ежедневный остаток
              </Typography.Text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              paddingTop: "24px",
            }}
          >
            <img src={icon12} alt="" width={48} height={48} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                tag="p"
                view="primary-large"
                style={{
                  margin: 0,
                }}
              >
                Бесплатные уведомления
              </Typography.Text>
              <Gap size={4} />
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{
                  margin: 0,
                }}
                color="secondary"
              >
                Пуши и смс об операциях по всем дебетовым картам
              </Typography.Text>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              paddingTop: "16px",
            }}
          >
            <img src={icon13} alt="" width={48} height={48} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                tag="p"
                view="primary-large"
                style={{
                  margin: 0,
                }}
              >
                Бесплатные переводы
              </Typography.Text>
              <Gap size={4} />
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{
                  margin: 0,
                }}
                color="secondary"
              >
                В любые банки без комиссии
              </Typography.Text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              paddingTop: "24px",
            }}
          >
            <img src={icon14} alt="" width={48} height={48} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                tag="p"
                view="primary-large"
                style={{
                  margin: 0,
                }}
              >
                Увеличенный лимит на снятие наличных
              </Typography.Text>
              <Gap size={4} />
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{
                  margin: 0,
                }}
                color="secondary"
              >
                Без комиссии в банкоматах любых банков России
              </Typography.Text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              paddingTop: "24px",
            }}
          >
            <img src={icon15} alt="" width={48} height={48} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                tag="p"
                view="primary-large"
                style={{
                  margin: 0,
                }}
              >
                Скидка 20% на комиссию на бирже
              </Typography.Text>
              <Gap size={4} />
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{
                  margin: 0,
                }}
                color="secondary"
              >
                0,24% за сделки с ценными бумагами и валютой
              </Typography.Text>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              paddingTop: "24px",
            }}
          >
            <img src={icon16} alt="" width={48} height={48} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                tag="p"
                view="primary-large"
                style={{
                  margin: 0,
                }}
              >
                Бесплатная мобильная связь Альфа-Мобайл
              </Typography.Text>
              <Gap size={4} />
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{
                  margin: 0,
                }}
                color="secondary"
              >
                Тариф Смарт на 3 ГБ, 100 мин, 10 СМС
              </Typography.Text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              paddingTop: "24px",
            }}
          >
            <img src={icon17} alt="" width={48} height={48} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                tag="p"
                view="primary-large"
                style={{
                  margin: 0,
                }}
              >
                Альфа-Смарт для вас и 2 близких
              </Typography.Text>
              <Gap size={4} />
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{
                  margin: 0,
                }}
                color="secondary"
              >
                Приглашайте участников в семейную подписку
              </Typography.Text>
            </div>
          </div>
        </div>
      )}

      {step === 0 && <Gap size={72} />}

      {step === 1 && (
        <div style={{ height: "96px", backgroundColor: "white" }}></div>
      )}

      {step === 0 && (
        <div className={appSt.bottomBtn}>
          <ButtonMobile block view="primary" onClick={handleClickStepZero}>
            Выбрать
          </ButtonMobile>
        </div>
      )}

      {step === 1 && (
        <div className={appSt.bottomBtn}>
          <ButtonMobile block view="primary" onClick={handleClickStepOne}>
            Продолжить с подпиской
          </ButtonMobile>
        </div>
      )}
    </>
  );
};
