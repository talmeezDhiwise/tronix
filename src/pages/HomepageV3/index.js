import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Stack } from "components/Stack";
import { Line } from "components/Line";
import { Slider } from "components/Slider";
import { Button } from "components/Button";
import { PagerIndicator } from "components/PagerIndicator";
import { List } from "components/List";
import { Input } from "components/Input";

const HomepageV3Page = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column
        className="bg-gray_50 font-poppins mx-[auto] w-[100%]"
        compId="418:194"
        comWidth={1920}
        comHeight={6146}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="items-center justify-start w-[100%]"
          compId="681"
          comWidth={1920}
          comHeight={6146}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <header
            className="w-[100%]"
            compId="114"
            comWidth={1920}
            comHeight={180}
            compLeft={0}
            compRight={0}
            compType="Header"
          >
            <Column
              className="w-[100%]"
              compId="1050:2"
              comWidth={1920}
              comHeight={180}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-between w-[100%]"
                compId="1050:32"
                comWidth={1920}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_sosmedia_3.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain w-[10%]"
                  compId="1050:43"
                  comWidth={192}
                  comHeight={24}
                  compLeft={160}
                  compRight={0}
                  compType="Image"
                  alt="sosmedia"
                />
                <Row
                  className="items-center justify-center xl:mb-[10px] 3xl:mb-[14px] mb-[16px] xl:mr-[112px] 2xl:mr-[126px] 3xl:mr-[151px] mr-[168px] lg:mr-[98px] xl:mt-[11px] 3xl:mt-[15px] mt-[17px] 2xl:my-[12px] lg:my-[9px] w-[30%]"
                  compId="748"
                  comWidth={575}
                  comHeight={27}
                  compLeft={0}
                  compRight={168}
                  compType="Row"
                >
                  <Row
                    className="items-center justify-start w-[30%]"
                    compId="1050:33"
                    comWidth={172}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_call_3.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1050:35"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Call"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[77%]"
                      compId="1050:37"
                      comWidth={132}
                      comHeight={27}
                      compLeft={16}
                      compRight={0}
                      compType="Text"
                    >{`+12 345 6789 0`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[39%]"
                    compId="1050:38"
                    comWidth={223}
                    comHeight={27}
                    compLeft={32}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_email_4.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1050:40"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Email"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[82%]"
                      compId="1050:42"
                      comWidth={183}
                      comHeight={27}
                      compLeft={16}
                      compRight={0}
                      compType="Text"
                    >{`support@tronix.com`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[20%]"
                    compId="1050:58"
                    comWidth={116}
                    comHeight={27}
                    compLeft={32}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_user.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1050:65"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="User"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[66%]"
                      compId="1050:62"
                      comWidth={76}
                      comHeight={27}
                      compLeft={16}
                      compRight={0}
                      compType="Text"
                    >{`Account`}</Text>
                  </Row>
                </Row>
              </Row>
              <Stack
                className="3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] w-[100%]"
                compId="699"
                comWidth={1920}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Column
                  className="absolute inset-[0] items-center justify-start rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[100%]"
                  compId="649"
                  comWidth={1920}
                  comHeight={120}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Line
                    className="bg-gray_500 h-[1px] mx-[auto] opacity-op25 w-[83%]"
                    compId="1050:29"
                    comWidth={1598}
                    comHeight={1}
                    compLeft={10}
                    compRight={10}
                    compType="Line"
                  />
                  <Row
                    className="items-start justify-start lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[100%]"
                    compId="648"
                    comWidth={1920}
                    comHeight={55}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-semibold xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] mt-[1px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[6%]"
                      compId="1050:5"
                      comWidth={112}
                      comHeight={54}
                      compLeft={160}
                      compRight={0}
                      compType="Text"
                    >{`Tronix`}</Text>
                    <Stack
                      className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] h-[44px] mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] 2xl:ml-[1044px] 3xl:ml-[1253px] ml-[1392px] lg:ml-[812px] xl:ml-[928px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px] w-[44px]"
                      compId="701"
                      comWidth={44}
                      comHeight={44}
                      compLeft={1392}
                      compRight={0}
                      compType="Stack"
                    >
                      <Image
                        src={"images/img_shoppingbag_1.svg"}
                        className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] left-[0] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                        compId="1050:20"
                        comWidth={32}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="ShoppingBag"
                      />
                      <Column
                        className="absolute bg-deep_orange_400 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] items-center justify-start lg:py-[1px] 3xl:py-[2px] 2xl:py-[2px] xl:py-[2px] py-[3px] right-[0] rounded-radius50 top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="109"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal mx-[auto] not-italic 3xl:text-fs10 text-fs12 lg:text-fs7 xl:text-fs8 2xl:text-fs9 text-gray_50 text-left w-[67%]"
                          compId="1050:25"
                          comWidth={16}
                          comHeight={18}
                          compLeft={4}
                          compRight={4}
                          compType="Text"
                        >{`99`}</Text>
                      </Column>
                    </Stack>
                    <Image
                      src={"images/img_email_3.svg"}
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      compId="1050:22"
                      comWidth={32}
                      comHeight={32}
                      compLeft={20}
                      compRight={0}
                      compType="Image"
                      alt="Email"
                    />
                  </Row>
                </Column>
                <Row
                  className="absolute h-[max-content] inset-y-[0] items-center justify-center my-[auto] right-[18%] w-[59%]"
                  compId="1050:52"
                  comWidth={1137}
                  comHeight={48}
                  compLeft={0}
                  compRight={351}
                  compType="Row"
                >
                  <Row
                    className="items-center justify-between mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] w-[42%]"
                    compId="749"
                    comWidth={473}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                      compId="1050:53"
                      comWidth={54}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Home`}</Text>
                    <Text
                      className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                      compId="1050:54"
                      comWidth={54}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`About`}</Text>
                    <Text
                      className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[15%]"
                      compId="1050:55"
                      comWidth={70}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Product`}</Text>
                    <Text
                      className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[8%]"
                      compId="1050:56"
                      comWidth={40}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Blog`}</Text>
                    <Text
                      className="cursor-pointer hover:font-normal font-normal font-nunitosans my-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[13%]"
                      compId="1050:57"
                      comWidth={63}
                      comHeight={25}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Contact`}</Text>
                  </Row>
                  <Row
                    className="bg-bluegray_100_3f items-center justify-between 3xl:ml-[108px] ml-[120px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius8 w-[48%]"
                    compId="650"
                    comWidth={544}
                    comHeight={48}
                    compLeft={120}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[20%]"
                      compId="1050:69"
                      comWidth={109}
                      comHeight={27}
                      compLeft={32}
                      compRight={0}
                      compType="Text"
                    >{`Search here`}</Text>
                    <Image
                      src={"images/img_search_1.svg"}
                      className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                      compId="1050:70"
                      comWidth={48}
                      comHeight={48}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="search"
                    />
                  </Row>
                </Row>
              </Stack>
            </Column>
          </header>
          <Stack
            className="font-montserrat lg:h-[376px] xl:h-[430px] 2xl:h-[484px] 3xl:h-[580px] h-[644px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[83%]"
            compId="703"
            comWidth={1601}
            comHeight={644}
            compLeft={10}
            compRight={10}
            compType="Stack"
          >
            <Stack
              className="absolute lg:h-[376px] xl:h-[430px] 2xl:h-[484px] 3xl:h-[580px] h-[644px] inset-[0] w-[100%]"
              compId="705"
              comWidth={1601}
              comHeight={644}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Slider
                autoPlay
                autoPlayInterval={2000}
                slidesToShow={1}
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="absolute left-[0] w-[66%]"
                items={[...Array(6)].map(() => (
                  <>
                    <Stack
                      className="lg:h-[376px] xl:h-[430px] 2xl:h-[484px] 3xl:h-[580px] h-[644px]"
                      compId="707"
                      comWidth={1058}
                      comHeight={644}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Image
                        src={"images/img_image_10.svg"}
                        className="absolute lg:h-[376px] xl:h-[430px] 2xl:h-[484px] 3xl:h-[580px] h-[644px] inset-[0] object-cover w-[100%]"
                        compId="1050:78"
                        comWidth={1058}
                        comHeight={644}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="image"
                      />
                      <Column
                        className="absolute items-start justify-start left-[10%] top-[28%] w-[54%]"
                        compId="1050:88"
                        comWidth={576}
                        comHeight={246}
                        compLeft={105}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold font-montserrat leading-lh lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_800 text-left w-[100%]"
                          compId="1050:89"
                          comWidth={576}
                          comHeight={136}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Better Devices for Better Life`}</Text>
                        <Text
                          className="font-normal font-poppins lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 3xl:leading-lh36 leading-lh4000 lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] xl:mx-[2px] lg:mx-[2px] 3xl:mx-[3px] 2xl:mx-[3px] mx-[4px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[99%]"
                          compId="1050:90"
                          comWidth={568}
                          comHeight={80}
                          compLeft={4}
                          compRight={4}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                      </Column>
                    </Stack>
                  </>
                ))}
              />
              <Column
                className="absolute inset-[0] items-start justify-start w-[100%]"
                compId="1057:302"
                comWidth={1601}
                comHeight={644}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Stack
                  className="lg:h-[179px] xl:h-[205px] 2xl:h-[230px] 3xl:h-[276px] h-[306px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] w-[32%]"
                  compId="709"
                  comWidth={512}
                  comHeight={306}
                  compLeft={10}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_placeholder_5.svg"}
                    className="absolute lg:h-[179px] xl:h-[205px] 2xl:h-[230px] 3xl:h-[276px] h-[306px] inset-[0] object-cover w-[100%]"
                    compId="1050:117"
                    comWidth={512}
                    comHeight={306}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Button
                    className="absolute bg-gray_50_cc font-bold h-[max-content] inset-[0] justify-center m-[auto] lg:py-[19px] xl:py-[22px] 2xl:py-[25px] 3xl:py-[30px] py-[34.06px] rounded-radius16 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[66%]"
                    compId="88"
                    comWidth={339}
                    comHeight={93}
                    compLeft={86}
                    compRight={87}
                    compType="Button"
                  >{`PC Gaming Collection`}</Button>
                </Stack>
                <Stack
                  className="lg:h-[179px] xl:h-[205px] 2xl:h-[230px] 3xl:h-[276px] h-[306px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[32%]"
                  compId="711"
                  comWidth={512}
                  comHeight={306}
                  compLeft={10}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_placeholder_6.svg"}
                    className="absolute lg:h-[179px] xl:h-[205px] 2xl:h-[230px] 3xl:h-[276px] h-[306px] inset-[0] object-cover w-[100%]"
                    compId="1050:101"
                    comWidth={512}
                    comHeight={306}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="placeholder"
                  />
                  <Button
                    className="absolute bg-gray_50_cc font-bold h-[max-content] inset-[0] justify-center m-[auto] lg:py-[19px] xl:py-[22px] 2xl:py-[25px] 3xl:py-[30px] py-[34.06px] rounded-radius16 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[58%]"
                    compId="87"
                    comWidth={296}
                    comHeight={93}
                    compLeft={108}
                    compRight={108}
                    compType="Button"
                  >{`Camera Collection`}</Button>
                </Stack>
              </Column>
            </Stack>
            <PagerIndicator
              className="absolute bottom-[5%] h-[12px] left-[29%] w-[auto]"
              compId="113"
              comWidth={132}
              comHeight={12}
              compLeft={463}
              compRight={0}
              compType="PagerIndicator"
              count={6}
              activeCss="inline-block cursor-pointer w-[32px] h-[12px] bg-deep_orange_400 rounded-radius8"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_50"
              sliderRef={sliderRef}
              selectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
              unselectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
            />
          </Stack>
          <Column
            className="font-montserrat items-start justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
            compId="684"
            comWidth={1920}
            comHeight={264}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold xl:mx-[106px] 2xl:mx-[120px] 3xl:mx-[144px] mx-[160px] lg:mx-[93px] text-center lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 w-[9%]"
              compId="1050:125"
              comWidth={173}
              comHeight={44}
              compLeft={160}
              compRight={160}
              compType="Text"
            >{`Category`}</Text>
            <Column
              className="font-poppins items-center lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] mt-[52px] w-[100%]"
              compId="752"
              comWidth={1920}
              comHeight={168}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-start mx-[auto] w-[83%]"
                compId="1053:185"
                comWidth={1599}
                comHeight={168}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Column
                  className="items-center w-[10%]"
                  compId="1050:178"
                  comWidth={154}
                  comHeight={168}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_icon.svg"}
                    className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] mx-[auto] object-contain lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                    compId="1050:177"
                    comWidth={80}
                    comHeight={80}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="icon"
                  />
                  <Text
                    className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]"
                    compId="1050:131"
                    comWidth={154}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    {
                      <>
                        {`Computer & `}
                        <br />
                        {`Laptop`}
                      </>
                    }
                  </Text>
                </Column>
                <Column
                  className="items-center ml-[105px] lg:ml-[61px] xl:ml-[70px] 2xl:ml-[78px] 3xl:ml-[94px] w-[7%]"
                  compId="1050:179"
                  comWidth={110}
                  comHeight={168}
                  compLeft={105}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_icon_1.svg"}
                    className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] mx-[auto] object-contain lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                    compId="1050:176"
                    comWidth={80}
                    comHeight={80}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="icon"
                  />
                  <Text
                    className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]"
                    compId="1050:136"
                    comWidth={110}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    {
                      <>
                        {`Mobile & `}
                        <br />
                        {`Tablet`}
                      </>
                    }
                  </Text>
                </Column>
                <Column
                  className="items-center ml-[105px] lg:ml-[61px] xl:ml-[70px] 2xl:ml-[78px] 3xl:ml-[94px] w-[6%]"
                  compId="1050:180"
                  comWidth={100}
                  comHeight={168}
                  compLeft={105}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_icon_2.svg"}
                    className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] mx-[auto] object-contain lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                    compId="1050:175"
                    comWidth={80}
                    comHeight={80}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="icon"
                  />
                  <Text
                    className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]"
                    compId="1050:143"
                    comWidth={100}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Camera`}</Text>
                </Column>
                <Column
                  className="items-center ml-[105px] lg:ml-[61px] xl:ml-[70px] 2xl:ml-[78px] 3xl:ml-[94px] w-[9%]"
                  compId="1050:181"
                  comWidth={139}
                  comHeight={168}
                  compLeft={105}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_icon_3.svg"}
                    className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] mx-[auto] object-contain lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                    compId="1050:174"
                    comWidth={80}
                    comHeight={80}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="icon"
                  />
                  <Text
                    className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]"
                    compId="1050:148"
                    comWidth={139}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    {
                      <>
                        {`TV & Smart `}
                        <br />
                        {`Box`}
                      </>
                    }
                  </Text>
                </Column>
                <Column
                  className="items-center ml-[105px] lg:ml-[61px] xl:ml-[70px] 2xl:ml-[78px] 3xl:ml-[94px] w-[8%]"
                  compId="1050:182"
                  comWidth={122}
                  comHeight={168}
                  compLeft={105}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_icon_4.svg"}
                    className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] mx-[auto] object-contain lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                    compId="1050:173"
                    comWidth={80}
                    comHeight={80}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="icon"
                  />
                  <Text
                    className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]"
                    compId="1050:153"
                    comWidth={122}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    {
                      <>
                        {`Home `}
                        <br />
                        {`Appliance`}
                      </>
                    }
                  </Text>
                </Column>
                <Column
                  className="items-center ml-[105px] lg:ml-[61px] xl:ml-[70px] 2xl:ml-[78px] 3xl:ml-[94px] w-[9%]"
                  compId="1050:183"
                  comWidth={143}
                  comHeight={168}
                  compLeft={105}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_icon_5.svg"}
                    className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] mx-[auto] object-contain lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                    compId="1050:172"
                    comWidth={80}
                    comHeight={80}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="icon"
                  />
                  <Text
                    className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]"
                    compId="1050:158"
                    comWidth={143}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Accessories`}</Text>
                </Column>
                <Column
                  className="items-center ml-[105px] lg:ml-[61px] xl:ml-[70px] 2xl:ml-[78px] 3xl:ml-[94px] w-[9%]"
                  compId="1050:184"
                  comWidth={139}
                  comHeight={168}
                  compLeft={105}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_icon_6.svg"}
                    className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] mx-[auto] object-contain lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                    compId="1050:171"
                    comWidth={80}
                    comHeight={80}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="icon"
                  />
                  <Text
                    className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[100%]"
                    compId="1050:163"
                    comWidth={139}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    {
                      <>
                        {`Other `}
                        <br />
                        {`Categories`}
                      </>
                    }
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
          <Column
            className="font-poppins items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
            compId="653"
            comWidth={1920}
            comHeight={366}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compId="651"
              comWidth={1920}
              comHeight={44}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-bold font-montserrat xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[11%]"
                compId="1053:276"
                comWidth={219}
                comHeight={44}
                compLeft={160}
                compRight={0}
                compType="Text"
              >{`New Arrival`}</Text>
              <Text
                className="font-normal font-poppins xl:mr-[106px] 2xl:mr-[119px] 3xl:mr-[143px] mr-[159px] lg:mr-[92px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] not-italic text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[5%]"
                compId="1053:334"
                comWidth={92}
                comHeight={36}
                compLeft={0}
                compRight={159}
                compType="Text"
              >{`View All`}</Text>
            </Row>
            <List
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[83%]"
              compId="652"
              comWidth={1600}
              comHeight={290}
              compLeft={10}
              compRight={10}
              compType="List"
              orientation="horizontal"
            >
              <Row
                className="border border-gray_500 border-solid items-center justify-start rounded-radius32 w-[100%]"
                compId="1055:2"
                comWidth={512}
                comHeight={290}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Stack
                  className="lg:h-[170px] xl:h-[194px] 2xl:h-[218px] 3xl:h-[262px] h-[290px] w-[47%]"
                  compId="713"
                  comWidth={240}
                  comHeight={290}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_18.svg"}
                    className="absolute lg:h-[170px] xl:h-[194px] 2xl:h-[218px] 3xl:h-[262px] h-[290px] inset-[0] object-cover w-[100%]"
                    compId="1053:278"
                    comWidth={240}
                    comHeight={290}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Column
                    className="absolute bg-deep_orange_400 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start left-[10%] rounded-radius50 top-[8%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                    compId="1053:292"
                    comWidth={64}
                    comHeight={64}
                    compLeft={24}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                      compId="1053:294"
                      comWidth={40}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`NEW`}</Text>
                  </Column>
                </Stack>
                <Column
                  className="items-start lg:mb-[49px] xl:mb-[56px] 2xl:mb-[63px] 3xl:mb-[75px] mb-[84px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mt-[48px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] mt-[83px] w-[37%]"
                  compId="1053:281"
                  comWidth={191}
                  comHeight={123}
                  compLeft={32}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="753"
                    comWidth={191}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="1053:282"
                      comWidth={191}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                        compId="1053:283"
                        comWidth={191}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Smartphone 5G`}</Text>
                      <Text
                        className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[51%]"
                        compId="1053:284"
                        comWidth={98}
                        comHeight={36}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`$299.00`}</Text>
                    </Column>
                  </Column>
                  <Row
                    className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[83%]"
                    compId="1053:285"
                    comWidth={158}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-between w-[37%]"
                      compId="1053:286"
                      comWidth={59}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_star1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1053:287"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Star1"
                      />
                      <Text
                        className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                        compId="1053:288"
                        comWidth={27}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                    </Row>
                    <Line
                      className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] opacity-op5 rotate-[90deg] w-[1px]"
                      compId="1053:289"
                      comWidth={1}
                      comHeight={22}
                      compLeft={16}
                      compRight={0}
                      compType="Line"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                      compId="1053:291"
                      comWidth={67}
                      comHeight={27}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >{`Sold 99`}</Text>
                  </Row>
                </Column>
              </Row>
              <Row
                className="border border-gray_500 border-solid items-center justify-center rounded-radius32 w-[100%]"
                compId="1055:3"
                comWidth={512}
                comHeight={290}
                compLeft={32}
                compRight={0}
                compType="Row"
              >
                <Stack
                  className="lg:h-[170px] xl:h-[194px] 2xl:h-[218px] 3xl:h-[262px] h-[290px] w-[47%]"
                  compId="715"
                  comWidth={240}
                  comHeight={290}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_19.svg"}
                    className="absolute lg:h-[170px] xl:h-[194px] 2xl:h-[218px] 3xl:h-[262px] h-[290px] inset-[0] object-cover w-[100%]"
                    compId="1055:4"
                    comWidth={240}
                    comHeight={290}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Column
                    className="absolute bg-deep_orange_400 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start left-[10%] rounded-radius50 top-[8%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                    compId="1055:18"
                    comWidth={64}
                    comHeight={64}
                    compLeft={24}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                      compId="1055:20"
                      comWidth={40}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`NEW`}</Text>
                  </Column>
                </Stack>
                <Column
                  className="items-center lg:mb-[38px] xl:mb-[44px] 2xl:mb-[49px] 3xl:mb-[59px] mb-[66px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mr-[47px] xl:mr-[54px] 2xl:mr-[61px] 3xl:mr-[73px] mr-[82px] lg:mt-[37px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] mt-[65px] w-[31%]"
                  compId="1055:7"
                  comWidth={158}
                  comHeight={159}
                  compLeft={32}
                  compRight={82}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start mr-[1px] w-[99%]"
                    compId="1055:8"
                    comWidth={156}
                    comHeight={116}
                    compLeft={0}
                    compRight={2}
                    compType="Column"
                  >
                    <Text
                      className="font-normal leading-lh not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1055:9"
                      comWidth={156}
                      comHeight={72}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      {
                        <>
                          {`USB Speaker `}
                          <br />
                          {`Portable`}
                        </>
                      }
                    </Text>
                    <Text
                      className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[63%]"
                      compId="1055:10"
                      comWidth={98}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`$299.00`}</Text>
                  </Column>
                  <Row
                    className="items-start justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                    compId="1055:11"
                    comWidth={158}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-between w-[37%]"
                      compId="1055:12"
                      comWidth={59}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_star1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1055:13"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Star1"
                      />
                      <Text
                        className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                        compId="1055:14"
                        comWidth={27}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                    </Row>
                    <Line
                      className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] opacity-op5 rotate-[90deg] w-[1px]"
                      compId="1055:15"
                      comWidth={1}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Text
                      className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                      compId="1055:17"
                      comWidth={67}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Sold 99`}</Text>
                  </Row>
                </Column>
              </Row>
              <Row
                className="border border-gray_500 border-solid items-center justify-center rounded-radius32 w-[100%]"
                compId="1055:22"
                comWidth={512}
                comHeight={290}
                compLeft={32}
                compRight={0}
                compType="Row"
              >
                <Stack
                  className="lg:h-[170px] xl:h-[194px] 2xl:h-[218px] 3xl:h-[262px] h-[290px] w-[47%]"
                  compId="717"
                  comWidth={240}
                  comHeight={290}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_20.svg"}
                    className="absolute lg:h-[170px] xl:h-[194px] 2xl:h-[218px] 3xl:h-[262px] h-[290px] inset-[0] object-cover w-[100%]"
                    compId="1055:23"
                    comWidth={240}
                    comHeight={290}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Column
                    className="absolute bg-deep_orange_400 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start left-[10%] rounded-radius50 top-[8%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                    compId="1055:37"
                    comWidth={64}
                    comHeight={64}
                    compLeft={24}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                      compId="1055:39"
                      comWidth={40}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`NEW`}</Text>
                  </Column>
                </Stack>
                <Column
                  className="items-start lg:mb-[49px] xl:mb-[56px] 2xl:mb-[63px] 3xl:mb-[75px] mb-[84px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mr-[47px] xl:mr-[54px] 2xl:mr-[61px] 3xl:mr-[73px] mr-[82px] lg:mt-[48px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] mt-[83px] w-[31%]"
                  compId="1055:26"
                  comWidth={158}
                  comHeight={123}
                  compLeft={32}
                  compRight={82}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[69%]"
                    compId="1055:27"
                    comWidth={109}
                    comHeight={80}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1055:28"
                      comWidth={109}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Smart TV`}</Text>
                    <Text
                      className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[90%]"
                      compId="1055:29"
                      comWidth={98}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`$299.00`}</Text>
                  </Column>
                  <Column
                    className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                    compId="754"
                    comWidth={158}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-start justify-between w-[100%]"
                      compId="1055:30"
                      comWidth={158}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Row
                        className="items-center justify-between w-[37%]"
                        compId="1055:31"
                        comWidth={59}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_star1.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="1055:32"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Star1"
                        />
                        <Text
                          className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                          compId="1055:33"
                          comWidth={27}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`5.0`}</Text>
                      </Row>
                      <Line
                        className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] opacity-op5 rotate-[90deg] w-[1px]"
                        compId="1055:34"
                        comWidth={1}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Line"
                      />
                      <Text
                        className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                        compId="1055:36"
                        comWidth={67}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Sold 99`}</Text>
                    </Row>
                  </Column>
                </Column>
              </Row>
            </List>
          </Column>
          <Column
            className="font-poppins items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
            compId="661"
            comWidth={1920}
            comHeight={752}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-start mx-[auto] w-[83%]"
              compId="1053:258"
              comWidth={1601}
              comHeight={80}
              compLeft={10}
              compRight={10}
              compType="Row"
            >
              <Text
                className="font-bold font-montserrat lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_800 text-left w-[18%]"
                compId="1053:256"
                comWidth={294}
                comHeight={68}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Flash Sale`}</Text>
              <Row
                className="font-poppins lg:gap-[14px] xl:gap-[16px] 2xl:gap-[18px] 3xl:gap-[21px] gap-[24px] grid grid-cols-3 items-center justify-center lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] w-[18%]"
                compId="750"
                comWidth={288}
                comHeight={80}
                compLeft={40}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="border border-gray_500 border-solid lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] items-center lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] py-[8.5px] rounded-radius16 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                  compId="685"
                  comWidth={80}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mx-[auto] text-center text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[13%]"
                    compId="1053:260"
                    comWidth={10}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`1`}</Text>
                  <Text
                    className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[36%]"
                    compId="1053:261"
                    comWidth={29}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Hrs`}</Text>
                </Column>
                <Column
                  className="border border-gray_500 border-solid lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] items-center lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] py-[8.5px] rounded-radius16 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                  compId="686"
                  comWidth={80}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mx-[auto] text-center text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[39%]"
                    compId="1053:263"
                    comWidth={31}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`34`}</Text>
                  <Text
                    className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[40%]"
                    compId="1053:264"
                    comWidth={32}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Min`}</Text>
                </Column>
                <Column
                  className="border border-gray_500 border-solid lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] items-center lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] py-[8.5px] rounded-radius16 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                  compId="687"
                  comWidth={80}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mx-[auto] text-center text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[36%]"
                    compId="1053:266"
                    comWidth={29}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`26`}</Text>
                  <Text
                    className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[41%]"
                    compId="1053:267"
                    comWidth={33}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Sec`}</Text>
                </Column>
              </Row>
              <Text
                className="font-normal font-poppins lg:ml-[517px] xl:ml-[591px] 2xl:ml-[665px] 3xl:ml-[798px] ml-[887px] lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] my-[22px] not-italic text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[6%]"
                compId="1055:43"
                comWidth={92}
                comHeight={36}
                compLeft={887}
                compRight={0}
                compType="Text"
              >{`View All`}</Text>
            </Row>
            <List
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 min-h-[auto] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[61px] mx-[auto] w-[85%]"
              compId="660"
              comWidth={1627}
              comHeight={611}
              compLeft={10}
              compRight={10}
              compType="List"
              orientation="horizontal"
            >
              <Stack
                className="lg:h-[357px] xl:h-[408px] 2xl:h-[459px] 3xl:h-[551px] h-[611px] w-[100%]"
                compId="719"
                comWidth={512}
                comHeight={611}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Stack
                  className="absolute lg:h-[357px] xl:h-[408px] 2xl:h-[459px] 3xl:h-[551px] h-[611px] inset-[0] w-[100%]"
                  compId="721"
                  comWidth={512}
                  comHeight={611}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_21.svg"}
                    className="absolute lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] object-cover top-[0] w-[100%]"
                    compId="1053:190"
                    comWidth={512}
                    comHeight={376}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Image
                    src={"images/img_border_2.svg"}
                    className="absolute lg:h-[357px] xl:h-[408px] 2xl:h-[459px] 3xl:h-[551px] h-[611px] inset-[0] object-cover rounded-radius32 w-[100%]"
                    compId="1053:194"
                    comWidth={512}
                    comHeight={611}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="border"
                  />
                </Stack>
                <Column
                  className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[6%] w-[74%]"
                  compId="1053:197"
                  comWidth={380}
                  comHeight={539}
                  compLeft={0}
                  compRight={32}
                  compType="Column"
                >
                  <Button
                    className="bg-purple_300 font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[32%]"
                    compId="89"
                    comWidth={120}
                    comHeight={48}
                    compLeft={10}
                    compRight={0}
                    compType="Button"
                  >{`25% OFF`}</Button>
                  <Column
                    className="items-start lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] mt-[328px] w-[100%]"
                    compId="755"
                    comWidth={380}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[65%]"
                      compId="1053:198"
                      comWidth={247}
                      comHeight={80}
                      compLeft={32}
                      compRight={32}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="757"
                        comWidth={247}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                          compId="1053:199"
                          comWidth={247}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Wireless Headphone`}</Text>
                      </Column>
                      <Row
                        className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] w-[76%]"
                        compId="1053:200"
                        comWidth={187}
                        comHeight={36}
                        compLeft={30}
                        compRight={30}
                        compType="Row"
                      >
                        <Text
                          className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[43%]"
                          compId="1053:201"
                          comWidth={80}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`$29.99`}</Text>
                        <Text
                          className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                          compId="1053:202"
                          comWidth={15}
                          comHeight={36}
                          compLeft={8}
                          compRight={0}
                          compType="Text"
                        >{`-`}</Text>
                        <Text
                          className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[41%]"
                          compId="1053:203"
                          comWidth={76}
                          comHeight={36}
                          compLeft={8}
                          compRight={0}
                          compType="Text"
                        >{`$19.99`}</Text>
                      </Row>
                    </Column>
                  </Column>
                  <Column
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="756"
                    comWidth={380}
                    comHeight={51}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="655"
                      comWidth={380}
                      comHeight={51}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="758"
                        comWidth={380}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-between w-[100%]"
                          compId="654"
                          comWidth={380}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Text
                            className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[29%]"
                            compId="1053:208"
                            comWidth={109}
                            comHeight={27}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`Available: 10`}</Text>
                          <Text
                            className="font-normal lg:mr-[42px] xl:mr-[48px] 2xl:mr-[54px] 3xl:mr-[64px] mr-[72px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[16%]"
                            compId="1053:209"
                            comWidth={59}
                            comHeight={27}
                            compLeft={0}
                            compRight={72}
                            compType="Text"
                          >{`Sold: 5`}</Text>
                        </Row>
                      </Column>
                      <div
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] overflow-hidden relative w-[82%]"
                        compId="119"
                        comWidth={312}
                        comHeight={16}
                        compLeft={0}
                        compRight={10}
                        compType="ProgressBar"
                        name="Group119"
                      >
                        <div className="w-full h-full absolute bg-bluegray_100 rounded-[4px]"></div>
                        <div
                          className="h-full absolute bg-deep_orange_400  rounded-[4px]"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </Column>
                  </Column>
                </Column>
              </Stack>
              <Stack
                className="lg:h-[357px] xl:h-[408px] 2xl:h-[459px] 3xl:h-[551px] h-[611px] w-[100%]"
                compId="723"
                comWidth={512}
                comHeight={611}
                compLeft={32}
                compRight={0}
                compType="Stack"
              >
                <Stack
                  className="absolute lg:h-[357px] xl:h-[408px] 2xl:h-[459px] 3xl:h-[551px] h-[611px] inset-[0] w-[100%]"
                  compId="725"
                  comWidth={512}
                  comHeight={611}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_22.svg"}
                    className="absolute lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] object-cover top-[0] w-[100%]"
                    compId="1053:211"
                    comWidth={512}
                    comHeight={376}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Image
                    src={"images/img_border_2.svg"}
                    className="absolute lg:h-[357px] xl:h-[408px] 2xl:h-[459px] 3xl:h-[551px] h-[611px] inset-[0] object-cover rounded-radius32 w-[100%]"
                    compId="1053:215"
                    comWidth={512}
                    comHeight={611}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="border"
                  />
                </Stack>
                <Column
                  className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[6%] w-[74%]"
                  compId="1053:218"
                  comWidth={380}
                  comHeight={539}
                  compLeft={0}
                  compRight={32}
                  compType="Column"
                >
                  <Button
                    className="bg-purple_300 font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[32%]"
                    compId="90"
                    comWidth={120}
                    comHeight={48}
                    compLeft={10}
                    compRight={0}
                    compType="Button"
                  >{`25% OFF`}</Button>
                  <Column
                    className="items-start lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] mt-[328px] w-[100%]"
                    compId="759"
                    comWidth={380}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-center justify-start lg:mx-[36px] xl:mx-[41px] 2xl:mx-[46px] 3xl:mx-[55px] mx-[62px] w-[49%]"
                      compId="1053:219"
                      comWidth={187}
                      comHeight={80}
                      compLeft={62}
                      compRight={62}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mx-[auto] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[64%]"
                        compId="1053:220"
                        comWidth={120}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Air Purifier`}</Text>
                      <Row
                        className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                        compId="1053:221"
                        comWidth={187}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[43%]"
                          compId="1053:222"
                          comWidth={80}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`$29.99`}</Text>
                        <Text
                          className="font-medium text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                          compId="1053:223"
                          comWidth={15}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`-`}</Text>
                        <Text
                          className="font-medium text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[41%]"
                          compId="1053:224"
                          comWidth={76}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`$19.99`}</Text>
                      </Row>
                    </Column>
                  </Column>
                  <Column
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="760"
                    comWidth={380}
                    comHeight={51}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="657"
                      comWidth={380}
                      comHeight={51}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="761"
                        comWidth={380}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-between w-[100%]"
                          compId="656"
                          comWidth={380}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Text
                            className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[29%]"
                            compId="1053:229"
                            comWidth={109}
                            comHeight={27}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`Available: 15`}</Text>
                          <Text
                            className="font-normal lg:mr-[42px] xl:mr-[48px] 2xl:mr-[54px] 3xl:mr-[64px] mr-[72px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[16%]"
                            compId="1053:230"
                            comWidth={59}
                            comHeight={27}
                            compLeft={0}
                            compRight={72}
                            compType="Text"
                          >{`Sold: 11`}</Text>
                        </Row>
                      </Column>
                      <div
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] overflow-hidden relative w-[82%]"
                        compId="120"
                        comWidth={312}
                        comHeight={16}
                        compLeft={0}
                        compRight={10}
                        compType="ProgressBar"
                        name="Group120"
                      >
                        <div className="w-full h-full absolute bg-bluegray_100 rounded-[4px]"></div>
                        <div
                          className="h-full absolute bg-deep_orange_400  rounded-[4px]"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </Column>
                  </Column>
                </Column>
              </Stack>
              <Stack
                className="lg:h-[357px] xl:h-[408px] 2xl:h-[459px] 3xl:h-[551px] h-[611px] w-[100%]"
                compId="727"
                comWidth={539}
                comHeight={611}
                compLeft={32}
                compRight={0}
                compType="Stack"
              >
                <Stack
                  className="absolute lg:h-[357px] xl:h-[408px] 2xl:h-[459px] 3xl:h-[551px] h-[611px] left-[0] w-[95%]"
                  compId="729"
                  comWidth={512}
                  comHeight={611}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_23.svg"}
                    className="absolute lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] object-cover top-[0] w-[100%]"
                    compId="1053:232"
                    comWidth={512}
                    comHeight={376}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Image
                    src={"images/img_border_2.svg"}
                    className="absolute lg:h-[357px] xl:h-[408px] 2xl:h-[459px] 3xl:h-[551px] h-[611px] inset-[0] object-cover rounded-radius32 w-[100%]"
                    compId="1053:236"
                    comWidth={512}
                    comHeight={611}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="border"
                  />
                </Stack>
                <Row
                  className="absolute h-[max-content] inset-y-[0] items-center justify-between my-[auto] right-[0] w-[81%]"
                  compId="731"
                  comWidth={439}
                  comHeight={539}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start w-[87%]"
                    compId="1053:239"
                    comWidth={380}
                    comHeight={539}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Button
                      className="bg-purple_300 font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[32%]"
                      compId="91"
                      comWidth={120}
                      comHeight={48}
                      compLeft={10}
                      compRight={0}
                      compType="Button"
                    >{`25% OFF`}</Button>
                    <Column
                      className="items-start lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] mt-[328px] w-[100%]"
                      compId="762"
                      comWidth={380}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="items-start justify-start lg:mx-[33px] xl:mx-[38px] 2xl:mx-[42px] 3xl:mx-[51px] mx-[57px] w-[52%]"
                        compId="1053:240"
                        comWidth={198}
                        comHeight={80}
                        compLeft={57}
                        compRight={57}
                        compType="Column"
                      >
                        <Column
                          className="w-[100%]"
                          compId="764"
                          comWidth={198}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                            compId="1053:241"
                            comWidth={198}
                            comHeight={36}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`Bluetooth Printer`}</Text>
                        </Column>
                        <Row
                          className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] w-[94%]"
                          compId="1053:242"
                          comWidth={187}
                          comHeight={36}
                          compLeft={5.5}
                          compRight={5.5}
                          compType="Row"
                        >
                          <Text
                            className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[43%]"
                            compId="1053:243"
                            comWidth={80}
                            comHeight={36}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`$29.99`}</Text>
                          <Text
                            className="font-medium text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                            compId="1053:244"
                            comWidth={15}
                            comHeight={36}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`-`}</Text>
                          <Text
                            className="font-medium text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[41%]"
                            compId="1053:245"
                            comWidth={76}
                            comHeight={36}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`$19.99`}</Text>
                        </Row>
                      </Column>
                    </Column>
                    <Column
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                      compId="763"
                      comWidth={380}
                      comHeight={51}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="items-start justify-start w-[100%]"
                        compId="659"
                        comWidth={380}
                        comHeight={51}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Column
                          className="w-[100%]"
                          compId="765"
                          comWidth={380}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Row
                            className="items-center justify-between w-[100%]"
                            compId="658"
                            comWidth={380}
                            comHeight={27}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[27%]"
                              compId="1053:250"
                              comWidth={104}
                              comHeight={27}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`Available: 5`}</Text>
                            <Text
                              className="font-normal lg:mr-[42px] xl:mr-[48px] 2xl:mr-[54px] 3xl:mr-[65px] mr-[73px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[15%]"
                              compId="1053:251"
                              comWidth={58}
                              comHeight={27}
                              compLeft={0}
                              compRight={73}
                              compType="Text"
                            >{`Sold: 2`}</Text>
                          </Row>
                        </Column>
                        <div
                          className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] overflow-hidden relative w-[82%]"
                          compId="121"
                          comWidth={312}
                          comHeight={16}
                          compLeft={0}
                          compRight={10}
                          compType="ProgressBar"
                          name="Group121"
                        >
                          <div className="w-full h-full absolute bg-bluegray_100 rounded-[4px]"></div>
                          <div
                            className="h-full absolute bg-deep_orange_400  rounded-[4px]"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                      </Column>
                    </Column>
                  </Column>
                  <Image
                    src={"images/img_arrow_5.svg"}
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mb-[142px] xl:mb-[163px] 2xl:mb-[183px] 3xl:mb-[220px] mb-[245px] lg:mt-[143px] xl:mt-[164px] 2xl:mt-[184px] 3xl:mt-[221px] mt-[246px] object-contain rounded-radius8 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                    compId="1053:252"
                    comWidth={48}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="arrow"
                  />
                </Row>
              </Stack>
            </List>
          </Column>
          <Row
            className="items-center justify-center xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] opacity-op5 w-[83%]"
            compId="1057:2"
            comWidth={1600}
            comHeight={72}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Text
              className="font-normal font-playfairdisplay xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] not-italic lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[12%]"
              compId="1057:3"
              comWidth={189}
              comHeight={64}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`SimSong`}</Text>
            <Text
              className="font-medium font-poppins lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[9%]"
              compId="1057:4"
              comWidth={143}
              comHeight={72}
              compLeft={80}
              compRight={0}
              compType="Text"
            >{`Harps`}</Text>
            <Text
              className="font-normal font-vidaloka lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] xl:my-[4px] lg:my-[4px] 2xl:my-[5px] 3xl:my-[6px] my-[7px] not-italic lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[11%]"
              compId="1057:5"
              comWidth={169}
              comHeight={58}
              compLeft={80}
              compRight={0}
              compType="Text"
            >{`DiskVan`}</Text>
            <Text
              className="font-bold font-montserrat lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6.5px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[7%]"
              compId="1057:6"
              comWidth={111}
              comHeight={59}
              compLeft={80}
              compRight={0}
              compType="Text"
            >{`Ikon`}</Text>
            <Text
              className="font-bold font-nunito lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] 2xl:my-[2px] xl:my-[2px] lg:my-[2px] my-[3.5px] 3xl:my-[3px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[9%]"
              compId="1057:7"
              comWidth={145}
              comHeight={65}
              compLeft={80}
              compRight={0}
              compType="Text"
            >{`Strons`}</Text>
            <Text
              className="font-bold font-inter lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] xl:my-[4px] lg:my-[4px] 2xl:my-[5px] 3xl:my-[6px] my-[7px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[11%]"
              compId="1057:8"
              comWidth={183}
              comHeight={58}
              compLeft={80}
              compRight={0}
              compType="Text"
            >{`Cocoon`}</Text>
          </Row>
          <Stack
            className="lg:h-[251px] xl:h-[287px] 2xl:h-[322px] 3xl:h-[387px] h-[429px] xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] w-[83%]"
            compId="733"
            comWidth={1600}
            comHeight={429}
            compLeft={10}
            compRight={10}
            compType="Stack"
          >
            <Image
              src={"images/img_placeholder_7.svg"}
              className="absolute lg:h-[251px] xl:h-[287px] 2xl:h-[322px] 3xl:h-[387px] h-[429px] inset-[0] object-cover w-[100%]"
              compId="1057:200"
              comWidth={1600}
              comHeight={429}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="placeholder"
            />
            <Column
              className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[37%]"
              compId="1057:210"
              comWidth={595}
              comHeight={229}
              compLeft={503}
              compRight={502}
              compType="Column"
            >
              <Column
                className="font-montserrat w-[100%]"
                compId="766"
                comWidth={595}
                comHeight={59}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[100%]"
                  compId="1057:211"
                  comWidth={595}
                  comHeight={59}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Get Best Quality Device`}</Text>
              </Column>
              <Text
                className="font-normal font-poppins leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[84%]"
                compId="1057:212"
                comWidth={501}
                comHeight={54}
                compLeft={47}
                compRight={47}
                compType="Text"
              >
                {
                  <>
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}
                    <br />
                    {`sed do eiusmod tempor.`}
                  </>
                }
              </Text>
              <Button
                className="border border-gray_50 border-solid font-normal font-poppins lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] mx-[auto] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[25%]"
                compId="95"
                comWidth={149}
                comHeight={60}
                compLeft={47}
                compRight={47}
                compType="Button"
              >{`Shop Now`}</Button>
            </Column>
          </Stack>
          <Row
            className="font-poppins items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
            compId="665"
            comWidth={1920}
            comHeight={682}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="bg-deep_orange_400 items-start xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] rounded-radius32 w-[20%]"
              compId="691"
              comWidth={376}
              comHeight={682}
              compLeft={160}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold font-montserrat leading-lh lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] lg:mx-[28px] xl:mx-[32px] 2xl:mx-[36px] 3xl:mx-[43px] mx-[48px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_50 text-left w-[51%]"
                compId="1057:67"
                comWidth={191}
                comHeight={88}
                compLeft={48}
                compRight={48}
                compType="Text"
              >
                {
                  <>
                    {`Best `}
                    <br />
                    {`Collection`}
                  </>
                }
              </Text>
              <Text
                className="font-normal font-poppins leading-lh lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:mr-[27px] xl:mr-[31px] 2xl:mr-[35px] 3xl:mr-[42px] mr-[47px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[75%]"
                compId="1057:214"
                comWidth={281}
                comHeight={54}
                compLeft={48}
                compRight={47}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</Text>
              <Button
                className="border border-gray_50 border-solid font-normal font-poppins lg:mb-[210px] xl:mb-[240px] 2xl:mb-[270px] 3xl:mb-[324px] mb-[360px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] lg:mx-[28px] xl:mx-[32px] 2xl:mx-[36px] 3xl:mx-[43px] mx-[48px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[40%]"
                compId="96"
                comWidth={149}
                comHeight={60}
                compLeft={48}
                compRight={48}
                compType="Button"
              >{`Shop Now`}</Button>
            </Column>
            <Column
              className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[62%]"
              compId="664"
              comWidth={1194}
              comHeight={682}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-between w-[100%]"
                compId="662"
                comWidth={1194}
                comHeight={44}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-bold font-montserrat lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[29%]"
                  compId="1057:217"
                  comWidth={352}
                  comHeight={44}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Featured Products`}</Text>
                <Text
                  className="font-normal font-poppins xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] not-italic text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                  compId="1057:68"
                  comWidth={92}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`View All`}</Text>
              </Row>
              <List
                className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 min-h-[auto] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] w-[100%]"
                compId="663"
                comWidth={1194}
                comHeight={602}
                compLeft={0}
                compRight={0}
                compType="List"
                orientation="horizontal"
              >
                <Column
                  className="bg-gray_50 border border-gray_500 border-solid items-center justify-start rounded-radius32 w-[100%]"
                  compId="1057:69"
                  comWidth={376}
                  comHeight={602}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Stack
                    className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] mx-[auto] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px] w-[376px]"
                    compId="735"
                    comWidth={376}
                    comHeight={376}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_maskgroup_24.svg"}
                      className="absolute lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] inset-[0] object-cover lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px] w-[376px]"
                      compId="1057:70"
                      comWidth={376}
                      comHeight={376}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="MaskGroup"
                    />
                    <Column
                      className="absolute right-[9%] top-[9%] w-[16%]"
                      compId="1057:74"
                      comWidth={60}
                      comHeight={129}
                      compLeft={0}
                      compRight={32}
                      compType="Column"
                    >
                      <Button
                        className="bg-blue_600 font-medium lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] py-[9.545px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[100%]"
                        compId="100"
                        comWidth={60}
                        comHeight={43}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                      >{`New`}</Button>
                      <Text
                        className="bg-purple_300 font-medium leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] px-[8.5px] py-[8px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[100%]"
                        compId="99"
                        comWidth={60}
                        comHeight={70}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        {
                          <>
                            {`-10%`}
                            <br />
                            {`Off`}
                          </>
                        }
                      </Text>
                    </Column>
                  </Stack>
                  <Column
                    className="items-start justify-start lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[66%]"
                    compId="1057:79"
                    comWidth={249}
                    comHeight={154}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="767"
                      comWidth={249}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                        compId="1057:80"
                        comWidth={249}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Wireless Microphone`}</Text>
                    </Column>
                    <Row
                      className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] w-[75%]"
                      compId="1057:81"
                      comWidth={187}
                      comHeight={36}
                      compLeft={31}
                      compRight={31}
                      compType="Row"
                    >
                      <Text
                        className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[43%]"
                        compId="1057:82"
                        comWidth={80}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`$29.99`}</Text>
                      <Text
                        className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                        compId="1057:83"
                        comWidth={15}
                        comHeight={36}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >{`-`}</Text>
                      <Text
                        className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[41%]"
                        compId="1057:84"
                        comWidth={76}
                        comHeight={36}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >{`$19.99`}</Text>
                    </Row>
                    <Button
                      className="bg-deep_orange_400 font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[64%]"
                      compId="98"
                      comWidth={160}
                      comHeight={50}
                      compLeft={31}
                      compRight={31}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                  </Column>
                </Column>
                <Column
                  className="bg-gray_50 border border-gray_500 border-solid items-center justify-start rounded-radius32 w-[100%]"
                  compId="1057:88"
                  comWidth={376}
                  comHeight={602}
                  compLeft={32}
                  compRight={0}
                  compType="Column"
                >
                  <Stack
                    className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] mx-[auto] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px] w-[376px]"
                    compId="737"
                    comWidth={376}
                    comHeight={376}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_maskgroup_25.svg"}
                      className="absolute lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] inset-[0] object-cover lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px] w-[376px]"
                      compId="1057:89"
                      comWidth={376}
                      comHeight={376}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="MaskGroup"
                    />
                    <Button
                      className="absolute bg-gray_800 font-medium lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] py-[9.545px] right-[9%] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 top-[9%] w-[25%]"
                      compId="102"
                      comWidth={93}
                      comHeight={43}
                      compLeft={0}
                      compRight={32}
                      compType="Button"
                    >{`Sold Out`}</Button>
                  </Stack>
                  <Column
                    className="items-center justify-start lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[78%]"
                    compId="1057:96"
                    comWidth={293}
                    comHeight={154}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1057:97"
                      comWidth={293}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Smart Watch New Series`}</Text>
                    <Row
                      className="items-center justify-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] w-[64%]"
                      compId="1057:98"
                      comWidth={187}
                      comHeight={36}
                      compLeft={10}
                      compRight={10}
                      compType="Row"
                    >
                      <Text
                        className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[43%]"
                        compId="1057:99"
                        comWidth={80}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`$29.99`}</Text>
                      <Text
                        className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                        compId="1057:100"
                        comWidth={15}
                        comHeight={36}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >{`-`}</Text>
                      <Text
                        className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[41%]"
                        compId="1057:101"
                        comWidth={76}
                        comHeight={36}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >{`$19.99`}</Text>
                    </Row>
                    <Button
                      className="bg-deep_orange_400 font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[55%]"
                      compId="101"
                      comWidth={160}
                      comHeight={50}
                      compLeft={10}
                      compRight={10}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                  </Column>
                </Column>
                <Column
                  className="bg-gray_50 border border-gray_500 border-solid items-center justify-start rounded-radius32 w-[100%]"
                  compId="1057:110"
                  comWidth={378}
                  comHeight={602}
                  compLeft={32}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_maskgroup_26.svg"}
                    className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] object-cover rounded-tl-[32px] rounded-tr-[32px] w-[100%]"
                    compId="1057:106"
                    comWidth={378}
                    comHeight={376}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Text
                    className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[59%]"
                    compId="1057:111"
                    comWidth={222}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Camera HD + Lens`}</Text>
                  <Row
                    className="items-center justify-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] w-[49%]"
                    compId="1057:112"
                    comWidth={187}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Text
                      className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[43%]"
                      compId="1057:113"
                      comWidth={80}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`$29.99`}</Text>
                    <Text
                      className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                      compId="1057:114"
                      comWidth={15}
                      comHeight={36}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`-`}</Text>
                    <Text
                      className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[41%]"
                      compId="1057:115"
                      comWidth={76}
                      comHeight={36}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`$19.99`}</Text>
                  </Row>
                  <Button
                    className="bg-deep_orange_400 font-normal lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[42%]"
                    compId="103"
                    comWidth={160}
                    comHeight={50}
                    compLeft={10}
                    compRight={10}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                </Column>
              </List>
            </Column>
          </Row>
          <Column
            className="font-poppins items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
            compId="667"
            comWidth={1920}
            comHeight={695}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compId="666"
              comWidth={1920}
              comHeight={44}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-bold font-montserrat xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[18%]"
                compId="1057:120"
                comWidth={352}
                comHeight={44}
                compLeft={160}
                compRight={0}
                compType="Text"
              >{`Top Rated Product`}</Text>
              <Text
                className="font-normal font-poppins xl:mr-[106px] 2xl:mr-[119px] 3xl:mr-[143px] mr-[159px] lg:mr-[92px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] not-italic text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[5%]"
                compId="1057:121"
                comWidth={92}
                comHeight={36}
                compLeft={0}
                compRight={159}
                compType="Text"
              >{`View All`}</Text>
            </Row>
            <List
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-4 min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[83%]"
              compId="1057:122"
              comWidth={1600}
              comHeight={619}
              compLeft={10}
              compRight={10}
              compType="List"
              orientation="horizontal"
            >
              <Stack
                className="lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] w-[100%]"
                compId="739"
                comWidth={376}
                comHeight={619}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_border_1.svg"}
                  className="absolute lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] inset-[0] object-cover rounded-radius32 w-[100%]"
                  compId="1057:124"
                  comWidth={376}
                  comHeight={619}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="border"
                />
                <Column
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[83%]"
                  compId="1057:128"
                  comWidth={313}
                  comHeight={546}
                  compLeft={31}
                  compRight={32}
                  compType="Column"
                >
                  <Image
                    src={"images/img_image_11.svg"}
                    className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] mx-[auto] object-cover lg:w-[182px] xl:w-[208px] 2xl:w-[234px] 3xl:w-[281px] w-[313px]"
                    compId="1057:125"
                    comWidth={313}
                    comHeight={313}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Column
                    className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[67%]"
                    compId="1057:129"
                    comWidth={209}
                    comHeight={76}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1057:130"
                      comWidth={209}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Smart Mop Robot`}</Text>
                    <Text
                      className="font-medium mx-[auto] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[51%]"
                      compId="1057:131"
                      comWidth={107}
                      comHeight={36}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`$1000.00`}</Text>
                  </Column>
                  <Row
                    className="items-start justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[50%]"
                    compId="1057:132"
                    comWidth={158}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-between w-[37%]"
                      compId="1057:133"
                      comWidth={59}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_star1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1057:134"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Star1"
                      />
                      <Text
                        className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                        compId="1057:135"
                        comWidth={27}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                    </Row>
                    <Line
                      className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] opacity-op5 rotate-[90deg] w-[1px]"
                      compId="1057:136"
                      comWidth={1}
                      comHeight={22}
                      compLeft={16}
                      compRight={0}
                      compType="Line"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                      compId="1057:138"
                      comWidth={67}
                      comHeight={27}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >{`Sold 99`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[72%]"
                    compId="1057:139"
                    comWidth={226}
                    comHeight={50}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Button
                      className="bg-deep_orange_400 font-normal not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                      compId="104"
                      comWidth={160}
                      comHeight={50}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                    <Image
                      src={"images/img_wishlist.svg"}
                      className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] object-contain lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px] w-[50px]"
                      compId="1057:223"
                      comWidth={50}
                      comHeight={50}
                      compLeft={16}
                      compRight={0}
                      compType="Image"
                      alt="wishlist"
                    />
                  </Row>
                </Column>
              </Stack>
              <Stack
                className="lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] w-[100%]"
                compId="741"
                comWidth={376}
                comHeight={619}
                compLeft={32}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_border_1.svg"}
                  className="absolute lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] inset-[0] object-cover rounded-radius32 w-[100%]"
                  compId="1057:143"
                  comWidth={376}
                  comHeight={619}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="border"
                />
                <Column
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[83%]"
                  compId="1057:147"
                  comWidth={313}
                  comHeight={546}
                  compLeft={31}
                  compRight={32}
                  compType="Column"
                >
                  <Image
                    src={"images/img_image_12.svg"}
                    className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] mx-[auto] object-cover lg:w-[182px] xl:w-[208px] 2xl:w-[234px] 3xl:w-[281px] w-[313px]"
                    compId="1057:144"
                    comWidth={313}
                    comHeight={313}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Column
                    className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[48%]"
                    compId="1057:148"
                    comWidth={149}
                    comHeight={76}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1057:149"
                      comWidth={149}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Smart TV HD`}</Text>
                    <Text
                      className="font-medium lg:mx-[12px] xl:mx-[14px] 2xl:mx-[15px] 3xl:mx-[18px] mx-[21px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[72%]"
                      compId="1057:150"
                      comWidth={107}
                      comHeight={36}
                      compLeft={21}
                      compRight={21}
                      compType="Text"
                    >{`$1000.00`}</Text>
                  </Column>
                  <Row
                    className="items-start justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[50%]"
                    compId="1057:151"
                    comWidth={158}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-between w-[37%]"
                      compId="1057:152"
                      comWidth={59}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_star1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1057:153"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Star1"
                      />
                      <Text
                        className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                        compId="1057:154"
                        comWidth={27}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                    </Row>
                    <Line
                      className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] opacity-op5 rotate-[90deg] w-[1px]"
                      compId="1057:155"
                      comWidth={1}
                      comHeight={22}
                      compLeft={16}
                      compRight={0}
                      compType="Line"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                      compId="1057:157"
                      comWidth={67}
                      comHeight={27}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >{`Sold 99`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[72%]"
                    compId="1057:158"
                    comWidth={226}
                    comHeight={50}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Button
                      className="bg-deep_orange_400 font-normal not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                      compId="105"
                      comWidth={160}
                      comHeight={50}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                    <Image
                      src={"images/img_wishlist.svg"}
                      className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] object-contain lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px] w-[50px]"
                      compId="1057:226"
                      comWidth={50}
                      comHeight={50}
                      compLeft={16}
                      compRight={0}
                      compType="Image"
                      alt="wishlist"
                    />
                  </Row>
                </Column>
              </Stack>
              <Stack
                className="lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] w-[100%]"
                compId="743"
                comWidth={376}
                comHeight={619}
                compLeft={32}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_border_1.svg"}
                  className="absolute lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] inset-[0] object-cover rounded-radius32 w-[100%]"
                  compId="1057:162"
                  comWidth={376}
                  comHeight={619}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="border"
                />
                <Column
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[83%]"
                  compId="1057:166"
                  comWidth={313}
                  comHeight={546}
                  compLeft={31}
                  compRight={32}
                  compType="Column"
                >
                  <Image
                    src={"images/img_image_13.svg"}
                    className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] mx-[auto] object-cover lg:w-[182px] xl:w-[208px] 2xl:w-[234px] 3xl:w-[281px] w-[313px]"
                    compId="1057:163"
                    comWidth={313}
                    comHeight={313}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Column
                    className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[81%]"
                    compId="1057:167"
                    comWidth={252}
                    comHeight={76}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1057:168"
                      comWidth={252}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Surveillance Camera`}</Text>
                    <Text
                      className="font-medium mx-[auto] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[42%]"
                      compId="1057:169"
                      comWidth={107}
                      comHeight={36}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`$1000.00`}</Text>
                  </Column>
                  <Row
                    className="items-start justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[50%]"
                    compId="1057:170"
                    comWidth={158}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-between w-[37%]"
                      compId="1057:171"
                      comWidth={59}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_star1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1057:172"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Star1"
                      />
                      <Text
                        className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                        compId="1057:173"
                        comWidth={27}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                    </Row>
                    <Line
                      className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] opacity-op5 rotate-[90deg] w-[1px]"
                      compId="1057:174"
                      comWidth={1}
                      comHeight={22}
                      compLeft={16}
                      compRight={0}
                      compType="Line"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                      compId="1057:176"
                      comWidth={67}
                      comHeight={27}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >{`Sold 99`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[72%]"
                    compId="1057:177"
                    comWidth={226}
                    comHeight={50}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Button
                      className="bg-deep_orange_400 font-normal not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                      compId="106"
                      comWidth={160}
                      comHeight={50}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                    <Image
                      src={"images/img_wishlist.svg"}
                      className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] object-contain lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px] w-[50px]"
                      compId="1057:229"
                      comWidth={50}
                      comHeight={50}
                      compLeft={16}
                      compRight={0}
                      compType="Image"
                      alt="wishlist"
                    />
                  </Row>
                </Column>
              </Stack>
              <Stack
                className="lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] w-[100%]"
                compId="745"
                comWidth={376}
                comHeight={619}
                compLeft={32}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_border_1.svg"}
                  className="absolute lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] inset-[0] object-cover rounded-radius32 w-[100%]"
                  compId="1057:181"
                  comWidth={376}
                  comHeight={619}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="border"
                />
                <Column
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[83%]"
                  compId="1057:185"
                  comWidth={313}
                  comHeight={546}
                  compLeft={31}
                  compRight={32}
                  compType="Column"
                >
                  <Image
                    src={"images/img_image_14.svg"}
                    className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] mx-[auto] object-cover lg:w-[182px] xl:w-[208px] 2xl:w-[234px] 3xl:w-[281px] w-[313px]"
                    compId="1057:182"
                    comWidth={313}
                    comHeight={313}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Column
                    className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[45%]"
                    compId="1057:186"
                    comWidth={141}
                    comHeight={76}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1057:187"
                      comWidth={141}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Joystick Pro`}</Text>
                    <Text
                      className="font-medium xl:mx-[11px] 2xl:mx-[12px] 3xl:mx-[15px] mx-[17px] lg:mx-[9px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[76%]"
                      compId="1057:188"
                      comWidth={107}
                      comHeight={36}
                      compLeft={17}
                      compRight={17}
                      compType="Text"
                    >{`$1000.00`}</Text>
                  </Column>
                  <Row
                    className="items-start justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[50%]"
                    compId="1057:189"
                    comWidth={158}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-between w-[37%]"
                      compId="1057:190"
                      comWidth={59}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_star1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1057:191"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Star1"
                      />
                      <Text
                        className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                        compId="1057:192"
                        comWidth={27}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                    </Row>
                    <Line
                      className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] opacity-op5 rotate-[90deg] w-[1px]"
                      compId="1057:193"
                      comWidth={1}
                      comHeight={22}
                      compLeft={16}
                      compRight={0}
                      compType="Line"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                      compId="1057:195"
                      comWidth={67}
                      comHeight={27}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >{`Sold 99`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[72%]"
                    compId="1057:196"
                    comWidth={226}
                    comHeight={50}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Button
                      className="bg-deep_orange_400 font-normal not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                      compId="107"
                      comWidth={160}
                      comHeight={50}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Add to Cart`}</Button>
                    <Image
                      src={"images/img_wishlist.svg"}
                      className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] object-contain lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px] w-[50px]"
                      compId="1057:232"
                      comWidth={50}
                      comHeight={50}
                      compLeft={16}
                      compRight={0}
                      compType="Image"
                      alt="wishlist"
                    />
                  </Row>
                </Column>
              </Stack>
            </List>
          </Column>
          <Row
            className="bg-deep_orange_400 font-poppins items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
            compId="668"
            comWidth={1920}
            comHeight={245}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Image
              src={"images/img_newsletter.svg"}
              className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] xl:mb-[49px] 2xl:mb-[55px] 3xl:mb-[66px] mb-[74px] lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] ml-[256px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] mt-[75px] lg:my-[43px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
              compId="849:313"
              comWidth={96}
              comHeight={96}
              compLeft={256}
              compRight={0}
              compType="Image"
              alt="Newsletter"
            />
            <Column
              className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[40px] xl:my-[46px] 2xl:my-[51px] 3xl:my-[62px] my-[69px] w-[33%]"
              compId="701:984"
              comWidth={637}
              comHeight={107}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold font-montserrat lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[100%]"
                compId="701:985"
                comWidth={637}
                comHeight={59}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Join our newsletter now!`}</Text>
              <Text
                className="font-normal font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[75%]"
                compId="701:986"
                comWidth={480}
                comHeight={32}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Register now and get our latest updates and promos.`}</Text>
            </Column>
            <Stack
              className="lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] h-[76px] 3xl:mb-[75px] mb-[84px] 3xl:ml-[105px] ml-[117px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] 3xl:mt-[76px] mt-[85px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] w-[27%]"
              compId="747"
              comWidth={526}
              comHeight={76}
              compLeft={117}
              compRight={0}
              compType="Stack"
            >
              <Input
                className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[15px] pb-[26.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pt-[14px] pt-[25.545px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500 text-gray_500 text-left tracking-ls1 w-[100%]"
                compId="115"
                comWidth={526}
                comHeight={76}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="Group115"
                placeholder={`Enter your email`}
              ></Input>
              <Button
                className="absolute bg-gray_800 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[2%] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
                compId="108"
                comWidth={105}
                comHeight={60}
                compLeft={0}
                compRight={8}
                compType="Button"
              >{`Join`}</Button>
            </Stack>
          </Row>
          <footer
            className="font-poppins w-[100%]"
            compId="1057:306"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Footer"
          >
            <Column
              className="bg-deep_orange_400_cf items-center justify-end w-[100%]"
              compId="672"
              comWidth={1920}
              comHeight={585}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-start lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
                compId="669"
                comWidth={1920}
                comHeight={260}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start justify-start 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] w-[20%]"
                  compId="671"
                  comWidth={381}
                  comHeight={246}
                  compLeft={160}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[29%]"
                    compId="1057:20"
                    comWidth={112}
                    comHeight={54}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Tronix`}</Text>
                  <Text
                    className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                    compId="1057:21"
                    comWidth={381}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                  <Row
                    className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                    compId="1057:56"
                    comWidth={243}
                    comHeight={32}
                    compLeft={0}
                    compRight={10}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_call_2.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1057:57"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Call"
                    />
                    <Text
                      className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                      compId="1057:59"
                      comWidth={211}
                      comHeight={32}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`+1234567890`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[64%]"
                    compId="1057:60"
                    comWidth={243}
                    comHeight={32}
                    compLeft={0}
                    compRight={10}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_email_2.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1057:61"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Email"
                    />
                    <Text
                      className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                      compId="1057:63"
                      comWidth={211}
                      comHeight={32}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`lovia@support.com`}</Text>
                  </Row>
                </Column>
                <Column
                  className="font-montserrat items-start justify-start lg:ml-[253px] xl:ml-[290px] 2xl:ml-[326px] 3xl:ml-[391px] ml-[435px] w-[6%]"
                  compId="1057:38"
                  comWidth={120}
                  comHeight={260}
                  compLeft={435}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                    compId="1057:39"
                    comWidth={120}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Company`}</Text>
                  <Column
                    className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[67%]"
                    compId="1057:40"
                    comWidth={80}
                    comHeight={199}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[68%]"
                      compId="1057:41"
                      comWidth={54}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`About`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                      compId="1057:42"
                      comWidth={80}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Products`}</Text>
                    <Text
                      className="font-normal lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] mr-[6px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[93%]"
                      compId="1057:43"
                      comWidth={74}
                      comHeight={27}
                      compLeft={0}
                      compRight={6}
                      compType="Text"
                    >{`Contact`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[50%]"
                      compId="1057:44"
                      comWidth={40}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Blog`}</Text>
                    <Text
                      className="font-normal lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[90%]"
                      compId="1057:45"
                      comWidth={72}
                      comHeight={27}
                      compLeft={0}
                      compRight={8}
                      compType="Text"
                    >{`Careers`}</Text>
                  </Column>
                </Column>
                <Column
                  className="font-montserrat items-start justify-start lg:mb-[25px] xl:mb-[28px] 2xl:mb-[32px] 3xl:mb-[38px] mb-[43px] xl:ml-[101px] 2xl:ml-[114px] 3xl:ml-[136px] ml-[152px] lg:ml-[88px] w-[9%]"
                  compId="1057:46"
                  comWidth={164}
                  comHeight={217}
                  compLeft={152}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[91%]"
                    compId="1057:47"
                    comWidth={150}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Information`}</Text>
                  <Column
                    className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="770"
                    comWidth={164}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="1057:48"
                      comWidth={164}
                      comHeight={156}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[65%]"
                        compId="1057:49"
                        comWidth={107}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Help Center`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                        compId="1057:50"
                        comWidth={164}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Payment Methods`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[88%]"
                        compId="1057:51"
                        comWidth={145}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Return & Refund`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[74%]"
                        compId="1057:52"
                        comWidth={122}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Privacy Policy`}</Text>
                    </Column>
                  </Column>
                </Column>
                <Column
                  className="font-montserrat items-start justify-start 2xl:mb-[107px] 3xl:mb-[128px] mb-[143px] lg:mb-[83px] xl:mb-[95px] ml-[108px] lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] w-[11%]"
                  compId="1057:53"
                  comWidth={216}
                  comHeight={117}
                  compLeft={108}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[56%]"
                    compId="1057:54"
                    comWidth={122}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Follow Us`}</Text>
                  <Column
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="771"
                    comWidth={216}
                    comHeight={56}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Image
                      src={"images/img_sosmedia_4.svg"}
                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-cover w-[100%]"
                      compId="1057:235"
                      comWidth={216}
                      comHeight={56}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="sosmedia"
                    />
                  </Column>
                </Column>
              </Row>
              <Line
                className="bg-gray_500 h-[1px] 3xl:mt-[114px] mt-[127px] lg:mt-[74px] xl:mt-[84px] 2xl:mt-[95px] mx-[auto] w-[83%]"
                compId="1057:64"
                comWidth={1600}
                comHeight={1}
                compLeft={10}
                compRight={10}
                compType="Line"
              />
              <Row
                className="items-center justify-between lg:mb-[31px] xl:mb-[36px] 2xl:mb-[40px] 3xl:mb-[48px] mb-[54px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] w-[100%]"
                compId="670"
                comWidth={1920}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_800 text-left w-[15%]"
                  compId="1057:18"
                  comWidth={287}
                  comHeight={21}
                  compLeft={160}
                  compRight={0}
                  compType="Text"
                >{`Copyright © 2021 Tronix. All Right Reseved`}</Text>
                <Image
                  src={"images/img_payment_1.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] mr-[160px] lg:mr-[93px] object-contain w-[7%]"
                  compId="1057:11"
                  comWidth={128}
                  comHeight={32}
                  compLeft={0}
                  compRight={160}
                  compType="Image"
                  alt="payment"
                />
              </Row>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default HomepageV3Page;
