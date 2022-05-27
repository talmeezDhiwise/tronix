import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Stack } from "components/Stack";
import { Line } from "components/Line";
import { RatingBar } from "components/RatingBar";
import { Button } from "components/Button";
import { List } from "components/List";
import { Input } from "components/Input";

const SingleProductDetailsPage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins items-center justify-start mx-[auto] w-[100%]"
        compId="407:331"
        comWidth={1920}
        comHeight={2902}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="206"
          comWidth={1920}
          comHeight={180}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Column
            className="w-[100%]"
            compId="1074:2"
            comWidth={1920}
            comHeight={180}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compId="1074:15"
              comWidth={1920}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_sosmedia_7.svg"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain w-[10%]"
                compId="1074:28"
                comWidth={192}
                comHeight={24}
                compLeft={160}
                compRight={0}
                compType="Image"
                alt="sosmedia"
              />
              <Row
                className="items-center justify-center xl:mb-[10px] 3xl:mb-[14px] mb-[16px] xl:mr-[112px] 2xl:mr-[126px] 3xl:mr-[151px] mr-[168px] lg:mr-[98px] xl:mt-[11px] 3xl:mt-[15px] mt-[17px] 2xl:my-[12px] lg:my-[9px] w-[30%]"
                compId="1072"
                comWidth={575}
                comHeight={27}
                compLeft={0}
                compRight={168}
                compType="Row"
              >
                <Row
                  className="items-center justify-start w-[30%]"
                  compId="1074:16"
                  comWidth={172}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_call_5.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1074:17"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Call"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[77%]"
                    compId="1074:19"
                    comWidth={132}
                    comHeight={27}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >{`+12 345 6789 0`}</Text>
                </Row>
                <Row
                  className="items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[39%]"
                  compId="1074:20"
                  comWidth={223}
                  comHeight={27}
                  compLeft={32}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_email_4.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1074:21"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Email"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[82%]"
                    compId="1074:23"
                    comWidth={183}
                    comHeight={27}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >{`support@tronix.com`}</Text>
                </Row>
                <Row
                  className="items-center justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[20%]"
                  compId="1074:24"
                  comWidth={116}
                  comHeight={27}
                  compLeft={32}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_user_1.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1074:25"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="User"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[66%]"
                    compId="1074:27"
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
              compId="1061"
              comWidth={1920}
              comHeight={120}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Column
                className="absolute inset-[0] items-center justify-start rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[100%]"
                compId="1027"
                comWidth={1920}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Line
                  className="bg-gray_500 h-[1px] mx-[auto] opacity-op25 w-[83%]"
                  compId="1074:12"
                  comWidth={1598}
                  comHeight={1}
                  compLeft={10}
                  compRight={10}
                  compType="Line"
                />
                <Row
                  className="items-start justify-start lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[100%]"
                  compId="1026"
                  comWidth={1920}
                  comHeight={55}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-semibold xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] mt-[1px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[6%]"
                    compId="1074:5"
                    comWidth={112}
                    comHeight={54}
                    compLeft={160}
                    compRight={0}
                    compType="Text"
                  >{`Tronix`}</Text>
                  <Stack
                    className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] h-[44px] mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] 2xl:ml-[1044px] 3xl:ml-[1253px] ml-[1392px] lg:ml-[812px] xl:ml-[928px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px] w-[44px]"
                    compId="1063"
                    comWidth={44}
                    comHeight={44}
                    compLeft={1392}
                    compRight={0}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_shoppingbag_3.svg"}
                      className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] left-[0] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      compId="1074:6"
                      comWidth={32}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="ShoppingBag"
                    />
                    <Column
                      className="absolute bg-deep_orange_400 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] items-center justify-start lg:py-[1px] 3xl:py-[2px] 2xl:py-[2px] xl:py-[2px] py-[3px] right-[0] rounded-radius50 top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="205"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mx-[auto] not-italic 3xl:text-fs10 text-fs12 lg:text-fs7 xl:text-fs8 2xl:text-fs9 text-gray_50 text-left w-[67%]"
                        compId="1074:11"
                        comWidth={16}
                        comHeight={18}
                        compLeft={4}
                        compRight={4}
                        compType="Text"
                      >{`99`}</Text>
                    </Column>
                  </Stack>
                  <Image
                    src={"images/img_email_6.svg"}
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                    compId="1074:8"
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
                compId="1074:37"
                comWidth={1137}
                comHeight={48}
                compLeft={0}
                compRight={351}
                compType="Row"
              >
                <Row
                  className="items-center justify-between mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] w-[42%]"
                  compId="1073"
                  comWidth={473}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                    compId="1074:38"
                    comWidth={54}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Home`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                    compId="1074:39"
                    comWidth={54}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[15%]"
                    compId="1074:40"
                    comWidth={70}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Product`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[8%]"
                    compId="1074:41"
                    comWidth={40}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Blog`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-nunitosans my-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[13%]"
                    compId="1074:42"
                    comWidth={63}
                    comHeight={25}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Contact`}</Text>
                </Row>
                <Row
                  className="bg-bluegray_100_3f items-center justify-between 3xl:ml-[108px] ml-[120px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius8 w-[48%]"
                  compId="1028"
                  comWidth={544}
                  comHeight={48}
                  compLeft={120}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[20%]"
                    compId="1074:45"
                    comWidth={109}
                    comHeight={27}
                    compLeft={32}
                    compRight={0}
                    compType="Text"
                  >{`Search here`}</Text>
                  <Image
                    src={"images/img_search_1.svg"}
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                    compId="1074:46"
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
        <Row
          className="items-start justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
          compId="1039"
          comWidth={1920}
          comHeight={695}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Image
            src={"images/img_image_31.svg"}
            className="lg:h-[395px] xl:h-[452px] 2xl:h-[508px] 3xl:h-[609px] h-[676px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] object-contain w-[43%]"
            compId="1089:255"
            comWidth={816}
            comHeight={676}
            compLeft={160}
            compRight={0}
            compType="Image"
            alt="image"
          />
          <Column
            className="lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] mb-[34px] ml-[104px] lg:ml-[60px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] w-[35%]"
            compId="1038"
            comWidth={680}
            comHeight={661}
            compLeft={104}
            compRight={0}
            compType="Column"
          >
            <Column
              className="items-start justify-start w-[100%]"
              compId="1036"
              comWidth={680}
              comHeight={501}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[45%]"
                compId="407:383"
                comWidth={303}
                comHeight={27}
                compLeft={0}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[23%]"
                  compId="407:384"
                  comWidth={71}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Product`}</Text>
                <Text
                  className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[4%]"
                  compId="407:385"
                  comWidth={11}
                  comHeight={27}
                  compLeft={16}
                  compRight={0}
                  compType="Text"
                >{`>`}</Text>
                <Text
                  className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[62%]"
                  compId="407:386"
                  comWidth={189}
                  comHeight={27}
                  compLeft={16}
                  compRight={0}
                  compType="Text"
                >{`Wireless Microphone`}</Text>
              </Row>
              <Column
                className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                compId="1075"
                comWidth={680}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-start w-[100%]"
                  compId="1029"
                  comWidth={680}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Row
                    className="items-center justify-between w-[57%]"
                    compId="1074"
                    comWidth={387}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-between w-[44%]"
                      compId="1074:187"
                      comWidth={172}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[16%]"
                        compId="672:190"
                        comWidth={28}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                      <RatingBar
                        className="my-[1px]"
                        compId="1066"
                        comWidth={136}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="RatingBar"
                        value={5}
                        starCount={5}
                        activeColor="var(--orange_A100)"
                        size={((window.innerWidth - 15) * 24) / 1920}
                      ></RatingBar>
                    </Row>
                    <Text
                      className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[26%]"
                      compId="669:189"
                      comWidth={100}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Review (12)`}</Text>
                    <Line
                      className="bg-gray_500 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] opacity-op5 rotate-[90deg] w-[2px]"
                      compId="1074:186"
                      comWidth={2}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Text
                      className="font-normal not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[17%]"
                      compId="1074:185"
                      comWidth={67}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Sold 99`}</Text>
                  </Row>
                  <Image
                    src={"images/img_love.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] 3xl:ml-[113px] ml-[126px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[94px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="673:193"
                    comWidth={24}
                    comHeight={24}
                    compLeft={126}
                    compRight={0}
                    compType="Image"
                    alt="Love"
                  />
                  <Text
                    className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[20%]"
                    compId="673:195"
                    comWidth={135}
                    comHeight={27}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`Add to Wishlist`}</Text>
                </Row>
              </Column>
              <Text
                className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[55%]"
                compId="407:387"
                comWidth={373}
                comHeight={54}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Wireless Microphone`}</Text>
              <Row
                className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[47%]"
                compId="1074:61"
                comWidth={322}
                comHeight={54}
                compLeft={0}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[39%]"
                  compId="407:388"
                  comWidth={124}
                  comHeight={54}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`$29.00`}</Text>
                <Text
                  className="font-normal line-through 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] 2xl:ml-[10px] 3xl:ml-[12px] ml-[14px] lg:ml-[8px] xl:ml-[9px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic opacity-op5 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[19%]"
                  compId="846:346"
                  comWidth={61}
                  comHeight={27}
                  compLeft={14}
                  compRight={0}
                  compType="Text"
                >{`$99.00`}</Text>
                <Button
                  className="border border-deep_orange_400 border-solid font-medium lg:mb-[2px] 3xl:mb-[3px] 2xl:mb-[3px] mb-[4px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] mt-[3px] xl:my-[2px] 3xl:py-[10px] py-[11.545px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] rounded-radius8 text-center text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[33%]"
                  compId="200"
                  comWidth={107}
                  comHeight={47}
                  compLeft={16}
                  compRight={0}
                  compType="Button"
                >{`Save 50%`}</Button>
              </Row>
              <Row
                className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] w-[82%]"
                compId="1074:65"
                comWidth={556}
                comHeight={32}
                compLeft={0}
                compRight={10}
                compType="Row"
              >
                <Row
                  className="items-center justify-start w-[29%]"
                  compId="1074:66"
                  comWidth={162}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_fastdelivery_1.svg"}
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                    compId="1074:67"
                    comWidth={32}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="FastDelivery"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[70%]"
                    compId="1074:71"
                    comWidth={114}
                    comHeight={27}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >{`Free Delivery`}</Text>
                </Row>
                <Row
                  className="items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[38%]"
                  compId="1074:72"
                  comWidth={212}
                  comHeight={32}
                  compLeft={32}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_voucher.svg"}
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                    compId="1074:73"
                    comWidth={32}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="voucher"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[77%]"
                    compId="1074:76"
                    comWidth={164}
                    comHeight={27}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >{`Available Voucher`}</Text>
                </Row>
                <Row
                  className="items-center justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[21%]"
                  compId="1074:77"
                  comWidth={118}
                  comHeight={32}
                  compLeft={32}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_package.svg"}
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                    compId="1074:78"
                    comWidth={32}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Package"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[59%]"
                    compId="1074:80"
                    comWidth={70}
                    comHeight={27}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >{`In Stock`}</Text>
                </Row>
              </Row>
              <Column
                className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                compId="1076"
                comWidth={680}
                comHeight={1}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Line
                  className="bg-gray_500 h-[1px] w-[100%]"
                  compId="407:389"
                  comWidth={680}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
              </Column>
              <Text
                className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[15%]"
                compId="1074:62"
                comWidth={103}
                comHeight={27}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Description`}</Text>
              <Text
                className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]"
                compId="407:390"
                comWidth={680}
                comHeight={96}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Wireless Microphone with the new style, shockproof, clear voice reception that suitable for recording, online meeting, vlogging, and calling. Free casing with high-quality zipper.`}</Text>
            </Column>
            <Row
              className="items-center justify-start mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]"
              compId="1037"
              comWidth={680}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-medium lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[12%]"
                compId="407:403"
                comWidth={79}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Quantity`}</Text>
              <Row
                className="items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[26%]"
                compId="407:396"
                comWidth={180}
                comHeight={60}
                compLeft={32}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_decrease.svg"}
                  className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain rounded-radius8 lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                  compId="407:399"
                  comWidth={60}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="decrease"
                />
                <Text
                  className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] ml-[26.5px] xl:my-[11px] 2xl:my-[12px] 3xl:my-[14px] my-[16.5px] lg:my-[9px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[4%]"
                  compId="407:402"
                  comWidth={7}
                  comHeight={27}
                  compLeft={26.5}
                  compRight={0}
                  compType="Text"
                >{`1`}</Text>
                <Image
                  src={"images/img_increase.svg"}
                  className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] ml-[26.5px] object-contain rounded-radius8 lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                  compId="407:397"
                  comWidth={60}
                  comHeight={60}
                  compLeft={26.5}
                  compRight={0}
                  compType="Image"
                  alt="increase"
                />
              </Row>
              <Button
                className="border border-deep_orange_400 border-solid font-medium lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] ml-[73px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] rounded-radius8 text-center text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[18%]"
                compId="201"
                comWidth={120}
                comHeight={60}
                compLeft={73}
                compRight={0}
                compType="Button"
              >{`Chat`}</Button>
              <Button
                className="bg-deep_orange_400 font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[26%]"
                compId="202"
                comWidth={180}
                comHeight={60}
                compLeft={16}
                compRight={0}
                compType="Button"
              >{`Add to Cart`}</Button>
            </Row>
          </Column>
        </Row>
        <Column
          className="items-start justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] mx-[auto] w-[83%]"
          compId="1089:258"
          comWidth={1600}
          comHeight={877}
          compLeft={10}
          compRight={10}
          compType="Column"
        >
          <Row
            className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[43%]"
            compId="843:98"
            comWidth={681}
            comHeight={36}
            compLeft={0}
            compRight={10}
            compType="Row"
          >
            <Text
              className="font-medium text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[25%]"
              compId="843:105"
              comWidth={173}
              comHeight={36}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Reviews (200)`}</Text>
            <Text
              className="font-medium lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[20%]"
              compId="843:106"
              comWidth={137}
              comHeight={36}
              compLeft={40}
              compRight={0}
              compType="Text"
            >{`Description`}</Text>
            <Text
              className="font-medium lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[19%]"
              compId="843:107"
              comWidth={129}
              comHeight={36}
              compLeft={40}
              compRight={0}
              compType="Text"
            >{`Discussion`}</Text>
            <Text
              className="font-medium lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] opacity-op5 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[18%]"
              compId="843:108"
              comWidth={122}
              comHeight={36}
              compLeft={40}
              compRight={0}
              compType="Text"
            >{`Gift Cards`}</Text>
          </Row>
          <Line
            className="bg-deep_orange_400 h-[2px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[11%]"
            compId="1074:109"
            comWidth={169}
            comHeight={2}
            compLeft={0}
            compRight={10}
            compType="Line"
          />
          <Column
            className="lg:mt-[36px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] mt-[62px] w-[100%]"
            compId="1077"
            comWidth={1600}
            comHeight={761}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-start justify-start w-[100%]"
              compId="1040"
              comWidth={1600}
              comHeight={761}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <List
                className="gap-[0] mb-[105px] lg:mb-[61px] xl:mb-[70px] 2xl:mb-[78px] 3xl:mb-[94px] min-h-[auto] w-[49%]"
                compId="846:264"
                comWidth={784}
                comHeight={656}
                compLeft={0}
                compRight={0}
                compType="List"
                orientation="vertical"
              >
                <Column
                  className="xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                  compId="1049"
                  comWidth={784}
                  comHeight={140}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="1078"
                    comWidth={784}
                    comHeight={62}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-start w-[100%]"
                      compId="1048"
                      comWidth={784}
                      comHeight={62}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <div
                        className="bg-gray_400 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] rounded-radius4 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                        compId="846:204"
                        comWidth={56}
                        comHeight={56}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Column
                        className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[39%]"
                        compId="1047"
                        comWidth={304}
                        comHeight={62}
                        compLeft={16}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[20%]"
                          compId="846:206"
                          comWidth={62}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Vanille`}</Text>
                        <Column
                          className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                          compId="1079"
                          comWidth={304}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Row
                            className="items-center justify-between w-[100%]"
                            compId="846:207"
                            comWidth={304}
                            comHeight={27}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-medium text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[9%]"
                              compId="846:208"
                              comWidth={28}
                              comHeight={27}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`5.0`}</Text>
                            <RatingBar
                              className="my-[1px]"
                              compId="1067"
                              comWidth={136}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="RatingBar"
                              value={5}
                              starCount={5}
                              activeColor="var(--orange_A100)"
                              size={((window.innerWidth - 15) * 24) / 1920}
                            ></RatingBar>
                            <Text
                              className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[36%]"
                              compId="846:215"
                              comWidth={108}
                              comHeight={27}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`1 Month Ago`}</Text>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Text
                    className="font-normal leading-lh lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                    compId="846:205"
                    comWidth={784}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                </Column>
                <Column
                  className="xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                  compId="1052"
                  comWidth={784}
                  comHeight={140}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="1080"
                    comWidth={784}
                    comHeight={62}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-start w-[100%]"
                      compId="1051"
                      comWidth={784}
                      comHeight={62}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <div
                        className="bg-gray_400 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] rounded-radius4 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                        compId="846:190"
                        comWidth={56}
                        comHeight={56}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Column
                        className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[39%]"
                        compId="1050"
                        comWidth={304}
                        comHeight={62}
                        compLeft={16}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[23%]"
                          compId="846:192"
                          comWidth={69}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Maduin`}</Text>
                        <Column
                          className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                          compId="1081"
                          comWidth={304}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Row
                            className="items-center justify-between w-[100%]"
                            compId="846:193"
                            comWidth={304}
                            comHeight={27}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-medium text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[9%]"
                              compId="846:194"
                              comWidth={28}
                              comHeight={27}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`5.0`}</Text>
                            <RatingBar
                              className="my-[1px]"
                              compId="1068"
                              comWidth={136}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="RatingBar"
                              value={5}
                              starCount={5}
                              activeColor="var(--orange_A100)"
                              size={((window.innerWidth - 15) * 24) / 1920}
                            ></RatingBar>
                            <Text
                              className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[36%]"
                              compId="846:201"
                              comWidth={108}
                              comHeight={27}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`1 Month Ago`}</Text>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Text
                    className="font-normal leading-lh lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                    compId="846:191"
                    comWidth={784}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                </Column>
                <Column
                  className="xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                  compId="1055"
                  comWidth={784}
                  comHeight={140}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="1082"
                    comWidth={784}
                    comHeight={62}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-start w-[100%]"
                      compId="1054"
                      comWidth={784}
                      comHeight={62}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <div
                        className="bg-gray_400 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] rounded-radius4 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                        compId="846:174"
                        comWidth={56}
                        comHeight={56}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Column
                        className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[39%]"
                        compId="1053"
                        comWidth={304}
                        comHeight={62}
                        compLeft={16}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[32%]"
                          compId="846:175"
                          comWidth={97}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Samantha`}</Text>
                        <Column
                          className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                          compId="1083"
                          comWidth={304}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Row
                            className="items-center justify-between w-[100%]"
                            compId="846:177"
                            comWidth={304}
                            comHeight={27}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-medium text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[9%]"
                              compId="846:178"
                              comWidth={28}
                              comHeight={27}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`5.0`}</Text>
                            <RatingBar
                              className="my-[1px]"
                              compId="1069"
                              comWidth={136}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="RatingBar"
                              value={5}
                              starCount={5}
                              activeColor="var(--orange_A100)"
                              size={((window.innerWidth - 15) * 24) / 1920}
                            ></RatingBar>
                            <Text
                              className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[36%]"
                              compId="846:186"
                              comWidth={108}
                              comHeight={27}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`1 Month Ago`}</Text>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Text
                    className="font-normal leading-lh lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                    compId="846:176"
                    comWidth={784}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                </Column>
                <Column
                  className="lg:mr-[36px] xl:mr-[41px] 2xl:mr-[46px] 3xl:mr-[55px] mr-[62px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[92%]"
                  compId="1058"
                  comWidth={722}
                  comHeight={140}
                  compLeft={0}
                  compRight={62}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="1084"
                    comWidth={722}
                    comHeight={62}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-start w-[100%]"
                      compId="1057"
                      comWidth={722}
                      comHeight={62}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <div
                        className="bg-gray_400 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] rounded-radius4 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                        compId="846:218"
                        comWidth={56}
                        comHeight={56}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Column
                        className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[42%]"
                        compId="1056"
                        comWidth={304}
                        comHeight={62}
                        compLeft={16}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[23%]"
                          compId="846:220"
                          comWidth={69}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Roveria`}</Text>
                        <Column
                          className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                          compId="1085"
                          comWidth={304}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Row
                            className="items-center justify-between w-[100%]"
                            compId="846:221"
                            comWidth={304}
                            comHeight={27}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-medium text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[9%]"
                              compId="846:222"
                              comWidth={28}
                              comHeight={27}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`5.0`}</Text>
                            <RatingBar
                              className="my-[1px]"
                              compId="1070"
                              comWidth={136}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="RatingBar"
                              value={5}
                              starCount={5}
                              activeColor="var(--orange_A100)"
                              size={((window.innerWidth - 15) * 24) / 1920}
                            ></RatingBar>
                            <Text
                              className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[36%]"
                              compId="846:229"
                              comWidth={108}
                              comHeight={27}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`1 Month Ago`}</Text>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Text
                    className="font-normal leading-lh lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                    compId="846:219"
                    comWidth={722}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                </Column>
              </List>
              <Line
                className="bg-gray_800 lg:h-[444px] xl:h-[508px] 2xl:h-[572px] 3xl:h-[686px] h-[761px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] opacity-op1 rotate-[90deg] w-[1px]"
                compId="846:263"
                comWidth={1}
                comHeight={761}
                compLeft={32}
                compRight={0}
                compType="Line"
              />
              <Column
                className="items-start justify-start ml-[103px] lg:ml-[60px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] w-[43%]"
                compId="870:802"
                comWidth={680}
                comHeight={761}
                compLeft={103}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[71%]"
                  compId="846:262"
                  comWidth={480}
                  comHeight={97}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[32%]"
                    compId="846:232"
                    comWidth={155}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Add Your Review`}</Text>
                  <Text
                    className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[100%]"
                    compId="846:233"
                    comWidth={480}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                </Column>
                <Column
                  className="lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] w-[100%]"
                  compId="1086"
                  comWidth={680}
                  comHeight={432}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="209"
                    comWidth={680}
                    comHeight={103}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[10%]"
                      compId="846:255"
                      comWidth={69}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Name *`}</Text>
                    <Input
                      className="bg-gray_50 placeholder:bg-transparent border border-gray_500 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius8 placeholder:text-gray_800 w-[100%]"
                      compId="208"
                      comWidth={680}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Group208"
                      placeholder={`Name *`}
                    ></Input>
                  </Column>
                  <Column
                    className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="211"
                    comWidth={680}
                    comHeight={103}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[9%]"
                      compId="846:258"
                      comWidth={63}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Email *`}</Text>
                    <Input
                      className="bg-gray_50 placeholder:bg-transparent border border-gray_500 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius8 placeholder:text-gray_800 w-[100%]"
                      compId="210"
                      comWidth={680}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Group210"
                      placeholder={`Email *`}
                    ></Input>
                  </Column>
                  <Column
                    className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="213"
                    comWidth={680}
                    comHeight={162}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                      compId="846:235"
                      comWidth={77}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Review *`}</Text>
                    <Input
                      className="bg-gray_50 placeholder:bg-transparent border border-gray_500 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius8 placeholder:text-gray_800 w-[100%]"
                      compId="212"
                      comWidth={680}
                      comHeight={119}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Group212"
                      placeholder={`Review *`}
                    ></Input>
                  </Column>
                </Column>
                <Row
                  className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] w-[37%]"
                  compId="846:238"
                  comWidth={251}
                  comHeight={32}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Text
                    className="font-medium 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[24%]"
                    compId="846:239"
                    comWidth={59}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Rating`}</Text>
                  <RatingBar
                    className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px]"
                    compId="1071"
                    comWidth={176}
                    comHeight={32}
                    compLeft={16}
                    compRight={0}
                    compType="RatingBar"
                    value={4}
                    starCount={5}
                    color="var(--gray_500)"
                    activeColor="var(--orange_A100)"
                    size={((window.innerWidth - 15) * 32) / 1920}
                  ></RatingBar>
                </Row>
                <Button
                  className="bg-deep_orange_400 font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[26%]"
                  compId="203"
                  comWidth={180}
                  comHeight={60}
                  compLeft={0}
                  compRight={10}
                  compType="Button"
                >{`Submit`}</Button>
              </Column>
            </Row>
          </Column>
        </Column>
        <Row
          className="bg-deep_orange_400 items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
          compId="1041"
          comWidth={1920}
          comHeight={245}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Image
            src={"images/img_newsletter_2.svg"}
            className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] xl:mb-[49px] 2xl:mb-[55px] 3xl:mb-[66px] mb-[74px] lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] ml-[256px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] mt-[75px] lg:my-[43px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
            compId="1074:115"
            comWidth={96}
            comHeight={96}
            compLeft={256}
            compRight={0}
            compType="Image"
            alt="Newsletter"
          />
          <Column
            className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[40px] xl:my-[46px] 2xl:my-[51px] 3xl:my-[62px] my-[69px] w-[33%]"
            compId="1074:123"
            comWidth={637}
            comHeight={107}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold font-montserrat lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[100%]"
              compId="1074:124"
              comWidth={637}
              comHeight={59}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Join our newsletter now!`}</Text>
            <Text
              className="font-normal font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[75%]"
              compId="1074:125"
              comWidth={480}
              comHeight={32}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`Register now and get our latest updates and promos.`}</Text>
          </Column>
          <Stack
            className="lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] h-[76px] 3xl:mb-[75px] mb-[84px] 3xl:ml-[105px] ml-[117px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] 3xl:mt-[76px] mt-[85px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] w-[27%]"
            compId="1065"
            comWidth={526}
            comHeight={76}
            compLeft={117}
            compRight={0}
            compType="Stack"
          >
            <Input
              className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[15px] pb-[26.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pt-[14px] pt-[25.545px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500 text-gray_500 text-left tracking-ls1 w-[100%]"
              compId="207"
              comWidth={526}
              comHeight={76}
              compLeft={0}
              compRight={0}
              compType="EditText"
              name="Group207"
              placeholder={`Enter your email`}
            ></Input>
            <Button
              className="absolute bg-gray_800 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[2%] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
              compId="204"
              comWidth={105}
              comHeight={60}
              compLeft={0}
              compRight={8}
              compType="Button"
            >{`Join`}</Button>
          </Stack>
        </Row>
        <footer
          className="w-[100%]"
          compId="1074:126"
          comWidth={1920}
          comHeight={585}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="bg-deep_orange_400_cf items-center justify-end w-[100%]"
            compId="1045"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-start justify-start lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
              compId="1042"
              comWidth={1920}
              comHeight={260}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] w-[20%]"
                compId="1044"
                comWidth={381}
                comHeight={246}
                compLeft={160}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[29%]"
                  compId="1074:137"
                  comWidth={112}
                  comHeight={54}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Tronix`}</Text>
                <Text
                  className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                  compId="1074:138"
                  comWidth={381}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                <Row
                  className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                  compId="1074:173"
                  comWidth={243}
                  comHeight={32}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Image
                    src={"images/img_call_6.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1074:174"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Call"
                  />
                  <Text
                    className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                    compId="1074:176"
                    comWidth={211}
                    comHeight={32}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`+1234567890`}</Text>
                </Row>
                <Row
                  className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[64%]"
                  compId="1074:177"
                  comWidth={243}
                  comHeight={32}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Image
                    src={"images/img_email_2.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1074:178"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Email"
                  />
                  <Text
                    className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                    compId="1074:180"
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
                compId="1074:139"
                comWidth={120}
                comHeight={260}
                compLeft={435}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                  compId="1074:140"
                  comWidth={120}
                  comHeight={29}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Company`}</Text>
                <Column
                  className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[67%]"
                  compId="1074:141"
                  comWidth={80}
                  comHeight={199}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[68%]"
                    compId="1074:142"
                    comWidth={54}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                    compId="1074:143"
                    comWidth={80}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Products`}</Text>
                  <Text
                    className="font-normal lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] mr-[6px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[93%]"
                    compId="1074:144"
                    comWidth={74}
                    comHeight={27}
                    compLeft={0}
                    compRight={6}
                    compType="Text"
                  >{`Contact`}</Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[50%]"
                    compId="1074:145"
                    comWidth={40}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Blog`}</Text>
                  <Text
                    className="font-normal lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[90%]"
                    compId="1074:146"
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
                compId="1074:147"
                comWidth={164}
                comHeight={217}
                compLeft={152}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[91%]"
                  compId="1074:148"
                  comWidth={150}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Information`}</Text>
                <Column
                  className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="1087"
                  comWidth={164}
                  comHeight={156}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="1074:149"
                    comWidth={164}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[65%]"
                      compId="1074:150"
                      comWidth={107}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Help Center`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                      compId="1074:151"
                      comWidth={164}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Payment Methods`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[88%]"
                      compId="1074:152"
                      comWidth={145}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Return & Refund`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[74%]"
                      compId="1074:153"
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
                compId="1074:154"
                comWidth={216}
                comHeight={117}
                compLeft={108}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[56%]"
                  compId="1074:155"
                  comWidth={122}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Follow Us`}</Text>
                <Column
                  className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="1088"
                  comWidth={216}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_sosmedia_8.svg"}
                    className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-cover w-[100%]"
                    compId="1074:156"
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
              compId="1074:181"
              comWidth={1600}
              comHeight={1}
              compLeft={10}
              compRight={10}
              compType="Line"
            />
            <Row
              className="items-center justify-between lg:mb-[31px] xl:mb-[36px] 2xl:mb-[40px] 3xl:mb-[48px] mb-[54px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] w-[100%]"
              compId="1043"
              comWidth={1920}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-normal lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_800 text-left w-[15%]"
                compId="1074:135"
                comWidth={287}
                comHeight={21}
                compLeft={160}
                compRight={0}
                compType="Text"
              >{`Copyright © 2021 Tronix. All Right Reseved`}</Text>
              <Image
                src={"images/img_payment_2.svg"}
                className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] mr-[160px] lg:mr-[93px] object-contain w-[7%]"
                compId="1074:128"
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
    </>
  );
};

export default SingleProductDetailsPage;
