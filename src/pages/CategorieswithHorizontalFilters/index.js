import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Stack } from "components/Stack";
import { Line } from "components/Line";
import { Switch } from "components/Switch";
import { List } from "components/List";
import { RatingBar } from "components/RatingBar";
import { CheckBox } from "components/CheckBox";
import { Button } from "components/Button";
import { Grid } from "components/Grid";
import { Input } from "components/Input";

const CategorieswithHorizontalFiltersPage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins items-start justify-start mx-[auto] w-[100%]"
        compId="426:919"
        comWidth={1920}
        comHeight={3999}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="178"
          comWidth={1920}
          comHeight={180}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Column
            className="w-[100%]"
            compId="1066:777"
            comWidth={1920}
            comHeight={180}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compId="1066:790"
              comWidth={1920}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_sosmedia_3.svg"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain w-[10%]"
                compId="1066:803"
                comWidth={192}
                comHeight={24}
                compLeft={160}
                compRight={0}
                compType="Image"
                alt="sosmedia"
              />
              <Row
                className="items-center justify-center xl:mb-[10px] 3xl:mb-[14px] mb-[16px] xl:mr-[112px] 2xl:mr-[126px] 3xl:mr-[151px] mr-[168px] lg:mr-[98px] xl:mt-[11px] 3xl:mt-[15px] mt-[17px] 2xl:my-[12px] lg:my-[9px] w-[30%]"
                compId="952"
                comWidth={575}
                comHeight={27}
                compLeft={0}
                compRight={168}
                compType="Row"
              >
                <Row
                  className="items-center justify-start w-[30%]"
                  compId="1066:791"
                  comWidth={172}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_call_4.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1066:792"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Call"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[77%]"
                    compId="1066:794"
                    comWidth={132}
                    comHeight={27}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >{`+12 345 6789 0`}</Text>
                </Row>
                <Row
                  className="items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[39%]"
                  compId="1066:795"
                  comWidth={223}
                  comHeight={27}
                  compLeft={32}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_email_4.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1066:796"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Email"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[82%]"
                    compId="1066:798"
                    comWidth={183}
                    comHeight={27}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >{`support@tronix.com`}</Text>
                </Row>
                <Row
                  className="items-center justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[20%]"
                  compId="1066:799"
                  comWidth={116}
                  comHeight={27}
                  compLeft={32}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_user.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1066:800"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="User"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[66%]"
                    compId="1066:802"
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
              compId="929"
              comWidth={1920}
              comHeight={120}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Column
                className="absolute inset-[0] items-center justify-start rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[100%]"
                compId="887"
                comWidth={1920}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Line
                  className="bg-gray_500 h-[1px] mx-[auto] opacity-op25 w-[83%]"
                  compId="1066:787"
                  comWidth={1598}
                  comHeight={1}
                  compLeft={10}
                  compRight={10}
                  compType="Line"
                />
                <Row
                  className="items-start justify-start lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[100%]"
                  compId="886"
                  comWidth={1920}
                  comHeight={55}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-semibold xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] mt-[1px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[6%]"
                    compId="1066:780"
                    comWidth={112}
                    comHeight={54}
                    compLeft={160}
                    compRight={0}
                    compType="Text"
                  >{`Tronix`}</Text>
                  <Stack
                    className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] h-[44px] mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] 2xl:ml-[1044px] 3xl:ml-[1253px] ml-[1392px] lg:ml-[812px] xl:ml-[928px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px] w-[44px]"
                    compId="931"
                    comWidth={44}
                    comHeight={44}
                    compLeft={1392}
                    compRight={0}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_shoppingbag_2.svg"}
                      className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] left-[0] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      compId="1066:781"
                      comWidth={32}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="ShoppingBag"
                    />
                    <Column
                      className="absolute bg-deep_orange_400 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] items-center justify-start lg:py-[1px] 3xl:py-[2px] 2xl:py-[2px] xl:py-[2px] py-[3px] right-[0] rounded-radius50 top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="177"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mx-[auto] not-italic 3xl:text-fs10 text-fs12 lg:text-fs7 xl:text-fs8 2xl:text-fs9 text-gray_50 text-left w-[67%]"
                        compId="1066:786"
                        comWidth={16}
                        comHeight={18}
                        compLeft={4}
                        compRight={4}
                        compType="Text"
                      >{`99`}</Text>
                    </Column>
                  </Stack>
                  <Image
                    src={"images/img_email_5.svg"}
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                    compId="1066:783"
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
                compId="1066:812"
                comWidth={1137}
                comHeight={48}
                compLeft={0}
                compRight={351}
                compType="Row"
              >
                <Row
                  className="items-center justify-between mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] w-[42%]"
                  compId="953"
                  comWidth={473}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                    compId="1066:813"
                    comWidth={54}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Home`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                    compId="1066:814"
                    comWidth={54}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[15%]"
                    compId="1066:815"
                    comWidth={70}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Product`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[8%]"
                    compId="1066:816"
                    comWidth={40}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Blog`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-nunitosans my-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[13%]"
                    compId="1066:817"
                    comWidth={63}
                    comHeight={25}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Contact`}</Text>
                </Row>
                <Row
                  className="bg-bluegray_100_3f items-center justify-between 3xl:ml-[108px] ml-[120px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius8 w-[48%]"
                  compId="888"
                  comWidth={544}
                  comHeight={48}
                  compLeft={120}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[20%]"
                    compId="1066:820"
                    comWidth={109}
                    comHeight={27}
                    compLeft={32}
                    compRight={0}
                    compType="Text"
                  >{`Search here`}</Text>
                  <Image
                    src={"images/img_search_1.svg"}
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                    compId="1066:821"
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
        <Column
          className="items-start lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] w-[100%]"
          compId="954"
          comWidth={1920}
          comHeight={27}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="items-center justify-start xl:mx-[106px] 2xl:mx-[120px] 3xl:mx-[144px] mx-[160px] lg:mx-[93px] w-[12%]"
            compId="1066:831"
            comWidth={224}
            comHeight={27}
            compLeft={160}
            compRight={160}
            compType="Row"
          >
            <Text
              className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[24%]"
              compId="1066:832"
              comWidth={54}
              comHeight={27}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Home`}</Text>
            <Text
              className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[5%]"
              compId="1066:833"
              comWidth={11}
              comHeight={27}
              compLeft={16}
              compRight={0}
              compType="Text"
            >{`>`}</Text>
            <Text
              className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[57%]"
              compId="1066:834"
              comWidth={127}
              comHeight={27}
              compLeft={16}
              compRight={0}
              compType="Text"
            >{`All Categories`}</Text>
          </Row>
        </Column>
        <Column
          className="items-center justify-start lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] mx-[auto] w-[33%]"
          compId="1066:828"
          comWidth={627.6}
          comHeight={147}
          compLeft={160}
          compRight={160}
          compType="Column"
        >
          <Text
            className="font-bold font-montserrat mx-[auto] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[56%]"
            compId="1066:829"
            comWidth={350}
            comHeight={59}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`All Categories`}</Text>
          <Text
            className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[100%]"
            compId="1066:830"
            comWidth={627.6}
            comHeight={64}
            compLeft={0}
            compRight={0}
            compType="Text"
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`}</Text>
        </Column>
        <Row
          className="border border-gray_500 border-solid items-center justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] mx-[auto] rounded-radius16 w-[83%]"
          compId="895"
          comWidth={1600}
          comHeight={500}
          compLeft={160}
          compRight={160}
          compType="Row"
        >
          <Column
            className="items-start lg:mb-[22px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[34px] mb-[38px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[20%]"
            compId="890"
            comWidth={312}
            comHeight={430}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[42%]"
              compId="1066:836"
              comWidth={130}
              comHeight={27}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`All Categories`}</Text>
            <Column
              className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="956"
              comWidth={312}
              comHeight={371}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-between w-[100%]"
                compId="889"
                comWidth={312}
                comHeight={371}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start w-[74%]"
                  compId="1066:838"
                  comWidth={231}
                  comHeight={371}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[96%]"
                    compId="1066:839"
                    comWidth={221}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    <span className="text-gray_800 font-poppins">
                      <>{`Computer & Laptop `}</>
                    </span>
                    <span className="text-gray_500 font-poppins">
                      <>{`(25)`}</>
                    </span>
                  </Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[81%]"
                    compId="1066:840"
                    comWidth={187}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    <span className="text-gray_800 font-poppins">
                      <>
                        {`Mobile & Tablet`}
                        <br />
                        {``}
                      </>
                    </span>
                    <span className="text-gray_500 font-poppins">
                      <>{`(125)`}</>
                    </span>
                  </Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[56%]"
                    compId="1066:841"
                    comWidth={129}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    <span className="text-gray_800 font-poppins">
                      <>
                        {`Camera`}
                        <br />
                        {` `}
                      </>
                    </span>
                    <span className="text-gray_500 font-poppins">
                      <>{`(150)`}</>
                    </span>
                  </Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[77%]"
                    compId="1066:842"
                    comWidth={178}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    <span className="text-gray_800 font-poppins">
                      <>
                        {`TV & Smart Box`}
                        <br />
                        {``}
                      </>
                    </span>
                    <span className="text-gray_500 font-poppins">
                      <>{`(75)`}</>
                    </span>
                  </Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[85%]"
                    compId="1066:843"
                    comWidth={197}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    <span className="text-gray_800 font-poppins">
                      <>
                        {`Home Appliance`}
                        <br />
                        {` `}
                      </>
                    </span>
                    <span className="text-gray_500 font-poppins">
                      <>{`(75)`}</>
                    </span>
                  </Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[70%]"
                    compId="1066:844"
                    comWidth={162}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    <span className="text-gray_800 font-poppins">
                      <>{`Smart Watch `}</>
                    </span>
                    <span className="text-gray_500 font-poppins">
                      <>{`(45)`}</>
                    </span>
                  </Text>
                  <Text
                    className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                    compId="1066:845"
                    comWidth={231}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    <span className="text-gray_800 font-poppins">
                      <>
                        {`Microphone & Audio`}
                        <br />
                        {` `}
                      </>
                    </span>
                    <span className="text-gray_500 font-poppins">
                      <>{`(55)`}</>
                    </span>
                  </Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[51%]"
                    compId="1066:846"
                    comWidth={117}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    <span className="text-gray_800 font-poppins">
                      <>{`Gaming `}</>
                    </span>
                    <span className="text-gray_500 font-poppins">
                      <>{`(40)`}</>
                    </span>
                  </Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[81%]"
                    compId="1066:849"
                    comWidth={188}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    <span className="text-gray_800 font-poppins">
                      <>{`More Categories `}</>
                    </span>
                    <span className="text-gray_500 font-poppins">
                      <>{`(10)`}</>
                    </span>
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
          <Column
            className="items-start lg:mb-[29px] xl:mb-[34px] 2xl:mb-[38px] 3xl:mb-[45px] mb-[51px] lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[20%]"
            compId="893"
            comWidth={312}
            comHeight={417}
            compLeft={64}
            compRight={0}
            compType="Column"
          >
            <Column
              className="w-[100%]"
              compId="957"
              comWidth={312}
              comHeight={83}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-between w-[100%]"
                compId="1066:950"
                comWidth={312}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[38%]"
                  compId="1066:951"
                  comWidth={120}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Filter by Price`}</Text>
                <Image
                  src={"images/img_chevrondown.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="1066:952"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="chevrondown"
                />
              </Row>
              <Stack
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                compId="933"
                comWidth={312}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <div
                  className="absolute bg-bluegray_100 lg:h-[4px] 2xl:h-[5px] xl:h-[5px] h-[6px] inset-x-[0] inset-y-[38%] w-[100%]"
                  compId="1066:947"
                  comWidth={312}
                  comHeight={6}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Switch
                  compId="184"
                  comWidth={88}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Switch"
                  onColor="#f46b5b"
                  offColor=""
                  onHandleColor="#fafafa"
                  offHandleColor=""
                  checked={true}
                  className="absolute left-[0] w-[28%]"
                />
              </Stack>
            </Column>
            <Text
              className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[51%]"
              compId="1066:954"
              comWidth={159}
              comHeight={27}
              compLeft={0}
              compRight={10}
              compType="Text"
            >
              <span className="text-gray_500 font-poppins">
                <>{`Price: `}</>
              </span>
              <span className="text-gray_800 font-poppins font-medium">
                <>{`$100 - $250`}</>
              </span>
              <span className="text-gray_500 font-poppins">
                <>{` `}</>
              </span>
            </Text>
            <Column
              className="lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] w-[100%]"
              compId="958"
              comWidth={312}
              comHeight={27}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-between w-[100%]"
                compId="1066:895"
                comWidth={312}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[43%]"
                  compId="1066:896"
                  comWidth={135}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Filter by Rating`}</Text>
                <Image
                  src={"images/img_chevrondown.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="1066:897"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="chevrondown"
                />
              </Row>
            </Column>
            <Column
              className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[62%]"
              compId="1066:858"
              comWidth={192}
              comHeight={184}
              compLeft={0}
              compRight={10}
              compType="Column"
            >
              <Row
                className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] gap-[16px] lg:gap-[9px] grid grid-cols-2 items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[33%]"
                compId="1066:859"
                comWidth={64}
                comHeight={24}
                compLeft={0}
                compRight={10}
                compType="Row"
              >
                <Image
                  src={"images/img_checkbox.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="1066:862"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Checkbox"
                />
                <Image
                  src={"images/img_star1_1.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="1066:861"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Star1"
                />
              </Row>
              <Row
                className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[50%]"
                compId="1066:864"
                comWidth={96}
                comHeight={24}
                compLeft={0}
                compRight={10}
                compType="Row"
              >
                <Image
                  src={"images/img_checkbox.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="1066:868"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Checkbox"
                />
                <Row
                  className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-2 items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[58%]"
                  compId="1066:865"
                  comWidth={56}
                  comHeight={24}
                  compLeft={16}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_star1_1.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1066:866"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Star1"
                  />
                  <Image
                    src={"images/img_star1_1.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1066:867"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Star2"
                  />
                </Row>
              </Row>
              <List
                className="gap-[0] min-h-[auto] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[83%]"
                compId="950"
                comWidth={160}
                comHeight={64}
                compLeft={0}
                compRight={10}
                compType="List"
                orientation="vertical"
              >
                <Row
                  className="items-center justify-between lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[80%]"
                  compId="1066:870"
                  comWidth={128}
                  comHeight={24}
                  compLeft={0}
                  compRight={32}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkbox.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1066:875"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Checkbox"
                  />
                  <Row
                    className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-3 items-center justify-between w-[69%]"
                    compId="1066:871"
                    comWidth={88}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1066:872"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star1"
                    />
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1066:873"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star2"
                    />
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1066:874"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star3"
                    />
                  </Row>
                </Row>
                <Row
                  className="items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]"
                  compId="1066:877"
                  comWidth={160}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkedbox.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1066:883"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Checkedbox"
                  />
                  <Row
                    className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-4 items-center justify-between w-[75%]"
                    compId="1066:878"
                    comWidth={120}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1066:879"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star1"
                    />
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1066:880"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star2"
                    />
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1066:881"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star3"
                    />
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1066:882"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star5"
                    />
                  </Row>
                </Row>
              </List>
              <Column
                className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                compId="959"
                comWidth={192}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-between w-[100%]"
                  compId="1066:886"
                  comWidth={192}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkbox.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1066:893"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Checkbox"
                  />
                  <RatingBar
                    className=""
                    compId="951"
                    comWidth={152}
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
              </Column>
            </Column>
          </Column>
          <Column
            className="lg:mb-[22px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[34px] mb-[38px] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] ml-[96px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[45%]"
            compId="894"
            comWidth={720}
            comHeight={430}
            compLeft={96}
            compRight={0}
            compType="Column"
          >
            <Column
              className="w-[100%]"
              compId="960"
              comWidth={720}
              comHeight={371}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-between w-[100%]"
                compId="892"
                comWidth={720}
                comHeight={290}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start justify-start w-[43%]"
                  compId="1066:915"
                  comWidth={312}
                  comHeight={290}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="962"
                    comWidth={312}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-between w-[100%]"
                      compId="1066:938"
                      comWidth={312}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[49%]"
                        compId="1066:939"
                        comWidth={153}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Filter by Location`}</Text>
                      <Image
                        src={"images/img_chevrondown.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1066:940"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="chevrondown"
                      />
                    </Row>
                  </Column>
                  <Column
                    className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[46%]"
                    compId="1066:916"
                    comWidth={144}
                    comHeight={231}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <CheckBox
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[76%]"
                      inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bluegray_100 border-bw3 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                      compId="180"
                      comWidth={109}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="CheckBox"
                      name="Group180"
                      label={`Jakarta`}
                    ></CheckBox>
                    <Column
                      className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                      compId="963"
                      comWidth={144}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-start w-[100%]"
                        compId="1066:921"
                        comWidth={144}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_checkedbox.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="1066:922"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Checkedbox"
                        />
                        <Text
                          className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[72%]"
                          compId="1066:925"
                          comWidth={104}
                          comHeight={27}
                          compLeft={16}
                          compRight={0}
                          compType="Text"
                        >{`Yogyakarta`}</Text>
                      </Row>
                    </Column>
                    <CheckBox
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[85%]"
                      inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bluegray_100 border-bw3 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                      compId="181"
                      comWidth={123}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="CheckBox"
                      name="Group181"
                      label={`Bandung`}
                    ></CheckBox>
                    <CheckBox
                      className="font-normal lg:mr-[5px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[94%]"
                      inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bluegray_100 border-bw3 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                      compId="182"
                      comWidth={135}
                      comHeight={27}
                      compLeft={0}
                      compRight={9}
                      compType="CheckBox"
                      name="Group182"
                      label={`Semarang`}
                    ></CheckBox>
                    <CheckBox
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[89%]"
                      inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bluegray_100 border-bw3 border-solid h-[27px] lg:h-[16px] lg:w-[15px] w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                      compId="183"
                      comWidth={128}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="CheckBox"
                      name="Group183"
                      label={`Surabaya`}
                    ></CheckBox>
                  </Column>
                </Column>
                <Column
                  className="2xl:mb-[108px] 3xl:mb-[130px] mb-[145px] lg:mb-[84px] xl:mb-[96px] w-[43%]"
                  compId="1089:8"
                  comWidth={312}
                  comHeight={145}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-between w-[100%]"
                    compId="1069:1080"
                    comWidth={312}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[54%]"
                      compId="1069:1081"
                      comWidth={170}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Filter by Promotion`}</Text>
                    <Image
                      src={"images/img_chevrondown.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1069:1082"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="chevrondown"
                    />
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="1069:1072"
                    comWidth={312}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[42%]"
                      compId="1069:1073"
                      comWidth={130}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Filter by Brand`}</Text>
                    <Image
                      src={"images/img_chevrondown.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1069:1074"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="chevrondown"
                    />
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="1069:1076"
                    comWidth={312}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[51%]"
                      compId="1069:1077"
                      comWidth={158}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Filter by Payment`}</Text>
                    <Image
                      src={"images/img_chevrondown.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1069:1078"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="chevrondown"
                    />
                  </Row>
                </Column>
              </Row>
              <Row
                className="items-start justify-start lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[21px] w-[100%]"
                compId="1069:1084"
                comWidth={720}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-medium 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[23%]"
                  compId="1069:1085"
                  comWidth={164}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Filter by Shipment`}</Text>
                <Image
                  src={"images/img_chevrondown.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] mb-[16px] lg:mb-[9px] 3xl:ml-[111px] ml-[124px] lg:ml-[72px] xl:ml-[82px] 2xl:ml-[93px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="1069:1086"
                  comWidth={24}
                  comHeight={24}
                  compLeft={124}
                  compRight={0}
                  compType="Image"
                  alt="chevrondown"
                />
                <Button
                  className="bg-deep_orange_400 font-medium lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] ml-[96px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[43%]"
                  compId="169"
                  comWidth={312}
                  comHeight={60}
                  compLeft={96}
                  compRight={0}
                  compType="Button"
                >{`Filter`}</Button>
              </Row>
            </Column>
            <Column
              className="items-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="961"
              comWidth={720}
              comHeight={27}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-medium mx-[106px] lg:mx-[61px] xl:mx-[70px] 2xl:mx-[79px] 3xl:mx-[95px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[14%]"
                compId="1066:944"
                comWidth={99}
                comHeight={27}
                compLeft={106}
                compRight={106}
                compType="Text"
              >{`Reset Filter`}</Text>
            </Column>
          </Column>
        </Row>
        <Grid
          className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-6 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[83%]"
          compId="948"
          comWidth={1600}
          comHeight={312}
          compLeft={160}
          compRight={160}
          compType="Grid"
        >
          <Column
            className="border border-gray_500 border-solid items-center justify-start lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] py-[20.5px] rounded-radius16 w-[100%]"
            compId="916"
            comWidth={240}
            comHeight={140}
            compLeft={0}
            compRight={1360}
            compType="Column"
          >
            <Image
              src={"images/img_laptop_1.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
              compId="1066:958"
              comWidth={56}
              comHeight={56}
              compLeft={10}
              compRight={10}
              compType="Image"
              alt="Laptop"
            />
            <Text
              className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[74%]"
              compId="1066:961"
              comWidth={178}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`Computer & Laptop`}</Text>
          </Column>
          <Column
            className="border border-gray_500 border-solid items-center justify-start lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] py-[20.5px] rounded-radius16 w-[100%]"
            compId="917"
            comWidth={240}
            comHeight={140}
            compLeft={272}
            compRight={1088}
            compType="Column"
          >
            <Image
              src={"images/img_smartphone_2.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
              compId="1066:963"
              comWidth={56}
              comHeight={56}
              compLeft={10}
              compRight={10}
              compType="Image"
              alt="Smartphone"
            />
            <Text
              className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[60%]"
              compId="1066:966"
              comWidth={144}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`Mobile & Tablet`}</Text>
          </Column>
          <Column
            className="border border-gray_500 border-solid items-center justify-start lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] py-[20.5px] rounded-radius16 w-[100%]"
            compId="918"
            comWidth={240}
            comHeight={140}
            compLeft={544}
            compRight={816}
            compType="Column"
          >
            <Image
              src={"images/img_camera_1.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
              compId="1066:968"
              comWidth={56}
              comHeight={56}
              compLeft={10}
              compRight={10}
              compType="Image"
              alt="Camera"
            />
            <Text
              className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[31%]"
              compId="1066:973"
              comWidth={75}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`Camera`}</Text>
          </Column>
          <Column
            className="border border-gray_500 border-solid items-center justify-start lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] py-[20.5px] rounded-radius16 w-[100%]"
            compId="919"
            comWidth={240}
            comHeight={140}
            compLeft={816}
            compRight={544}
            compType="Column"
          >
            <Image
              src={"images/img_tvandremote_1.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
              compId="1066:985"
              comWidth={56}
              comHeight={56}
              compLeft={10}
              compRight={10}
              compType="Image"
              alt="TvAndRemote"
            />
            <Text
              className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[59%]"
              compId="1066:988"
              comWidth={141}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`TV & Smart Box`}</Text>
          </Column>
          <Column
            className="border border-gray_500 border-solid items-center justify-start lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] py-[20.5px] rounded-radius16 w-[100%]"
            compId="920"
            comWidth={240}
            comHeight={140}
            compLeft={1088}
            compRight={272}
            compType="Column"
          >
            <Image
              src={"images/img_airconditioner_1.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
              compId="1066:990"
              comWidth={56}
              comHeight={56}
              compLeft={10}
              compRight={10}
              compType="Image"
              alt="AirConditioner"
            />
            <Text
              className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[63%]"
              compId="1066:993"
              comWidth={150}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`Home Appliance`}</Text>
          </Column>
          <Column
            className="border border-gray_500 border-solid items-center justify-start lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] py-[20.5px] rounded-radius16 w-[100%]"
            compId="921"
            comWidth={240}
            comHeight={140}
            compLeft={1360}
            compRight={0}
            compType="Column"
          >
            <Image
              src={"images/img_smartwatch.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
              compId="1066:1000"
              comWidth={56}
              comHeight={56}
              compLeft={10}
              compRight={10}
              compType="Image"
              alt="SmartWatch"
            />
            <Text
              className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[50%]"
              compId="1066:1003"
              comWidth={119}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`Smart Watch`}</Text>
          </Column>
          <Column
            className="border border-gray_500 border-solid items-center justify-start lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] py-[20.5px] rounded-radius16 w-[100%]"
            compId="922"
            comWidth={240}
            comHeight={140}
            compLeft={0}
            compRight={1360}
            compType="Column"
          >
            <Image
              src={"images/img_recording.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
              compId="1066:975"
              comWidth={56}
              comHeight={56}
              compLeft={10}
              compRight={10}
              compType="Image"
              alt="Recording"
            />
            <Text
              className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[76%]"
              compId="1066:978"
              comWidth={182}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`Microphone & Audio`}</Text>
          </Column>
          <Column
            className="border border-gray_500 border-solid items-center justify-start lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] py-[20.5px] rounded-radius16 w-[100%]"
            compId="923"
            comWidth={240}
            comHeight={140}
            compLeft={272}
            compRight={1088}
            compType="Column"
          >
            <Image
              src={"images/img_gamepad_1.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
              compId="1066:980"
              comWidth={56}
              comHeight={56}
              compLeft={10}
              compRight={10}
              compType="Image"
              alt="Gamepad"
            />
            <Text
              className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[30%]"
              compId="1066:983"
              comWidth={73}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`Gaming`}</Text>
          </Column>
          <Column
            className="border border-gray_500 border-solid items-center justify-start lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] py-[20.5px] rounded-radius16 w-[100%]"
            compId="924"
            comWidth={240}
            comHeight={140}
            compLeft={544}
            compRight={816}
            compType="Column"
          >
            <Image
              src={"images/img_printer.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
              compId="1066:995"
              comWidth={56}
              comHeight={56}
              compLeft={10}
              compRight={10}
              compType="Image"
              alt="Printer"
            />
            <Text
              className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[24%]"
              compId="1066:998"
              comWidth={58}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`Printer`}</Text>
          </Column>
          <Column
            className="border border-gray_500 border-solid items-center justify-start lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] py-[20.5px] rounded-radius16 w-[100%]"
            compId="925"
            comWidth={240}
            comHeight={140}
            compLeft={816}
            compRight={544}
            compType="Column"
          >
            <Image
              src={"images/img_headset.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
              compId="1066:1005"
              comWidth={56}
              comHeight={56}
              compLeft={10}
              compRight={10}
              compType="Image"
              alt="Headset"
            />
            <Text
              className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[45%]"
              compId="1066:1008"
              comWidth={108}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`Accessories`}</Text>
          </Column>
          <Column
            className="border border-gray_500 border-solid items-center justify-start lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] py-[20.5px] rounded-radius16 w-[100%]"
            compId="926"
            comWidth={240}
            comHeight={140}
            compLeft={1088}
            compRight={272}
            compType="Column"
          >
            <Image
              src={"images/img_speaker_1.svg"}
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
              compId="1066:1010"
              comWidth={56}
              comHeight={56}
              compLeft={10}
              compRight={10}
              compType="Image"
              alt="Speaker"
            />
            <Text
              className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[21%]"
              compId="1066:1013"
              comWidth={51}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`Other`}</Text>
          </Column>
        </Grid>
        <Column
          className="font-montserrat items-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
          compId="955"
          comWidth={1920}
          comHeight={133}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Column
            className="items-start justify-start xl:mx-[108px] 2xl:mx-[121px] 3xl:mx-[145px] mx-[162px] lg:mx-[94px] w-[74%]"
            compId="1069:1090"
            comWidth={1420}
            comHeight={133}
            compLeft={162}
            compRight={162}
            compType="Column"
          >
            <Text
              className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[14%]"
              compId="1069:1091"
              comWidth={197}
              comHeight={29}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`Featured Brand`}</Text>
            <Column
              className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="964"
              comWidth={1420}
              comHeight={72}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-between opacity-op5 w-[100%]"
                compId="1069:1092"
                comWidth={1420}
                comHeight={72}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal font-playfairdisplay xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] not-italic lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[13%]"
                  compId="1069:1093"
                  comWidth={189}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`SimSong`}</Text>
                <Text
                  className="font-medium font-poppins lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[10%]"
                  compId="1069:1094"
                  comWidth={143}
                  comHeight={72}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Harps`}</Text>
                <Text
                  className="font-normal font-vidaloka xl:my-[4px] lg:my-[4px] 2xl:my-[5px] 3xl:my-[6px] my-[7px] not-italic lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[12%]"
                  compId="1069:1095"
                  comWidth={169}
                  comHeight={58}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`DiskVan`}</Text>
                <Text
                  className="font-bold font-montserrat lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6.5px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[8%]"
                  compId="1069:1096"
                  comWidth={111}
                  comHeight={59}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Ikon`}</Text>
                <Text
                  className="font-bold font-nunito 2xl:my-[2px] xl:my-[2px] lg:my-[2px] my-[3.5px] 3xl:my-[3px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[10%]"
                  compId="1069:1097"
                  comWidth={145}
                  comHeight={65}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Strons`}</Text>
                <Text
                  className="font-bold font-inter xl:my-[4px] lg:my-[4px] 2xl:my-[5px] 3xl:my-[6px] my-[7px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[13%]"
                  compId="1069:1098"
                  comWidth={183}
                  comHeight={58}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Cocoon`}</Text>
              </Row>
            </Column>
          </Column>
        </Column>
        <Column
          className="font-poppins items-center justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
          compId="908"
          comWidth={1920}
          comHeight={1342}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="items-start justify-between w-[100%]"
            compId="905"
            comWidth={1920}
            comHeight={40}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-bold font-montserrat mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[8%]"
              compId="1069:1101"
              comWidth={153}
              comHeight={29}
              compLeft={160}
              compRight={0}
              compType="Text"
            >{`Product List`}</Text>
            <Text
              className="font-normal font-poppins xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] mr-[160px] lg:mr-[93px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[5%]"
              compId="1069:1102"
              comWidth={92}
              comHeight={36}
              compLeft={0}
              compRight={160}
              compType="Text"
            >{`View All`}</Text>
          </Row>
          <Grid
            className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[83%]"
            compId="949"
            comWidth={1600}
            comHeight={1270}
            compLeft={10}
            compRight={10}
            compType="Grid"
          >
            <Stack
              className="lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] w-[100%]"
              compId="935"
              comWidth={512}
              comHeight={619}
              compLeft={0}
              compRight={1088}
              compType="Stack"
            >
              <Image
                src={"images/img_border_3.svg"}
                className="absolute lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] inset-[0] object-cover rounded-radius32 w-[100%]"
                compId="1069:1104"
                comWidth={512}
                comHeight={619}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="border"
              />
              <Column
                className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[83%]"
                compId="1069:1108"
                comWidth={426.21}
                comHeight={546}
                compLeft={42.21}
                compRight={43.58}
                compType="Column"
              >
                <Image
                  src={"images/img_image_22.svg"}
                  className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] object-cover w-[100%]"
                  compId="1069:1105"
                  comWidth={426.21}
                  comHeight={313}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="image"
                />
                <Column
                  className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[49%]"
                  compId="1069:1109"
                  comWidth={209}
                  comHeight={76}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                    compId="1069:1110"
                    comWidth={209}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Smart Mop Robot`}</Text>
                  <Text
                    className="font-medium mx-[auto] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[51%]"
                    compId="1069:1111"
                    comWidth={107}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$1000.00`}</Text>
                </Column>
                <Row
                  className="items-start justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[37%]"
                  compId="1069:1112"
                  comWidth={158}
                  comHeight={27}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Row
                    className="items-center justify-between w-[37%]"
                    compId="1069:1113"
                    comWidth={59}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1069:1114"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star1"
                    />
                    <Text
                      className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                      compId="1069:1115"
                      comWidth={27}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`5.0`}</Text>
                  </Row>
                  <Line
                    className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] opacity-op5 rotate-[90deg] w-[1px]"
                    compId="1069:1116"
                    comWidth={1}
                    comHeight={22}
                    compLeft={16}
                    compRight={0}
                    compType="Line"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                    compId="1069:1118"
                    comWidth={67}
                    comHeight={27}
                    compLeft={15}
                    compRight={0}
                    compType="Text"
                  >{`Sold 99`}</Text>
                </Row>
                <Row
                  className="items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[53%]"
                  compId="1069:1119"
                  comWidth={226}
                  comHeight={50}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Button
                    className="bg-deep_orange_400 font-normal not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                    compId="170"
                    comWidth={160}
                    comHeight={50}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                  <Image
                    src={"images/img_wishlist_1.svg"}
                    className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] object-contain lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px] w-[50px]"
                    compId="1069:1122"
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
              compId="937"
              comWidth={512}
              comHeight={619}
              compLeft={544}
              compRight={544}
              compType="Stack"
            >
              <Image
                src={"images/img_border_3.svg"}
                className="absolute lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] inset-[0] object-cover rounded-radius32 w-[100%]"
                compId="1069:1126"
                comWidth={512}
                comHeight={619}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="border"
              />
              <Column
                className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[83%]"
                compId="1069:1130"
                comWidth={426.21}
                comHeight={546}
                compLeft={42.21}
                compRight={43.58}
                compType="Column"
              >
                <Image
                  src={"images/img_image_23.svg"}
                  className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] object-cover w-[100%]"
                  compId="1069:1127"
                  comWidth={426.21}
                  comHeight={313}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="image"
                />
                <Column
                  className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[35%]"
                  compId="1069:1131"
                  comWidth={149}
                  comHeight={76}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                    compId="1069:1132"
                    comWidth={149}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Smart TV HD`}</Text>
                  <Text
                    className="font-medium lg:mx-[12px] xl:mx-[14px] 2xl:mx-[15px] 3xl:mx-[18px] mx-[21px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[72%]"
                    compId="1069:1133"
                    comWidth={107}
                    comHeight={36}
                    compLeft={21}
                    compRight={21}
                    compType="Text"
                  >{`$1000.00`}</Text>
                </Column>
                <Row
                  className="items-start justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[37%]"
                  compId="1069:1134"
                  comWidth={158}
                  comHeight={27}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Row
                    className="items-center justify-between w-[37%]"
                    compId="1069:1135"
                    comWidth={59}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1069:1136"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star1"
                    />
                    <Text
                      className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                      compId="1069:1137"
                      comWidth={27}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`5.0`}</Text>
                  </Row>
                  <Line
                    className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] opacity-op5 rotate-[90deg] w-[1px]"
                    compId="1069:1138"
                    comWidth={1}
                    comHeight={22}
                    compLeft={16}
                    compRight={0}
                    compType="Line"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                    compId="1069:1140"
                    comWidth={67}
                    comHeight={27}
                    compLeft={15}
                    compRight={0}
                    compType="Text"
                  >{`Sold 99`}</Text>
                </Row>
                <Row
                  className="items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[53%]"
                  compId="1069:1141"
                  comWidth={226}
                  comHeight={50}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Button
                    className="bg-deep_orange_400 font-normal not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                    compId="171"
                    comWidth={160}
                    comHeight={50}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                  <Image
                    src={"images/img_wishlist_1.svg"}
                    className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] object-contain lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px] w-[50px]"
                    compId="1069:1144"
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
              compId="939"
              comWidth={512}
              comHeight={619}
              compLeft={1088}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_border_3.svg"}
                className="absolute lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] inset-[0] object-cover rounded-radius32 w-[100%]"
                compId="1069:1148"
                comWidth={512}
                comHeight={619}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="border"
              />
              <Column
                className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[83%]"
                compId="1069:1152"
                comWidth={426.21}
                comHeight={546}
                compLeft={42.21}
                compRight={43.58}
                compType="Column"
              >
                <Image
                  src={"images/img_image_24.svg"}
                  className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] object-cover w-[100%]"
                  compId="1069:1149"
                  comWidth={426.21}
                  comHeight={313}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="image"
                />
                <Column
                  className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[33%]"
                  compId="1069:1153"
                  comWidth={141}
                  comHeight={76}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                    compId="1069:1154"
                    comWidth={141}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Joystick Pro`}</Text>
                  <Text
                    className="font-medium xl:mx-[11px] 2xl:mx-[12px] 3xl:mx-[15px] mx-[17px] lg:mx-[9px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[76%]"
                    compId="1069:1155"
                    comWidth={107}
                    comHeight={36}
                    compLeft={17}
                    compRight={17}
                    compType="Text"
                  >{`$1000.00`}</Text>
                </Column>
                <Row
                  className="items-start justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[37%]"
                  compId="1069:1156"
                  comWidth={158}
                  comHeight={27}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Row
                    className="items-center justify-between w-[37%]"
                    compId="1069:1157"
                    comWidth={59}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1069:1158"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star1"
                    />
                    <Text
                      className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                      compId="1069:1159"
                      comWidth={27}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`5.0`}</Text>
                  </Row>
                  <Line
                    className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] opacity-op5 rotate-[90deg] w-[1px]"
                    compId="1069:1160"
                    comWidth={1}
                    comHeight={22}
                    compLeft={16}
                    compRight={0}
                    compType="Line"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                    compId="1069:1162"
                    comWidth={67}
                    comHeight={27}
                    compLeft={15}
                    compRight={0}
                    compType="Text"
                  >{`Sold 99`}</Text>
                </Row>
                <Row
                  className="items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[53%]"
                  compId="1069:1163"
                  comWidth={226}
                  comHeight={50}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Button
                    className="bg-deep_orange_400 font-normal not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                    compId="172"
                    comWidth={160}
                    comHeight={50}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                  <Image
                    src={"images/img_wishlist_1.svg"}
                    className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] object-contain lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px] w-[50px]"
                    compId="1069:1166"
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
              compId="941"
              comWidth={510}
              comHeight={619}
              compLeft={2}
              compRight={1088}
              compType="Stack"
            >
              <Image
                src={"images/img_border_4.svg"}
                className="absolute lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] inset-[0] object-cover rounded-radius32 w-[100%]"
                compId="1069:1170"
                comWidth={510}
                comHeight={619}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="border"
              />
              <Column
                className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[83%]"
                compId="1069:1174"
                comWidth={424.55}
                comHeight={546}
                compLeft={42.05}
                compRight={43.4}
                compType="Column"
              >
                <Image
                  src={"images/img_image_25.svg"}
                  className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] object-cover w-[100%]"
                  compId="1069:1171"
                  comWidth={424.55}
                  comHeight={313}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="image"
                />
                <Column
                  className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[59%]"
                  compId="1069:1175"
                  comWidth={249}
                  comHeight={76}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                    compId="1069:1176"
                    comWidth={249}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Wireless Microphone`}</Text>
                  <Text
                    className="font-medium mx-[auto] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[43%]"
                    compId="1069:1177"
                    comWidth={107}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$1000.00`}</Text>
                </Column>
                <Row
                  className="items-start justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[37%]"
                  compId="1069:1178"
                  comWidth={158}
                  comHeight={27}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Row
                    className="items-center justify-between w-[37%]"
                    compId="1069:1179"
                    comWidth={59}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1069:1180"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star1"
                    />
                    <Text
                      className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                      compId="1069:1181"
                      comWidth={27}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`5.0`}</Text>
                  </Row>
                  <Line
                    className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] opacity-op5 rotate-[90deg] w-[1px]"
                    compId="1069:1182"
                    comWidth={1}
                    comHeight={22}
                    compLeft={16}
                    compRight={0}
                    compType="Line"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                    compId="1069:1184"
                    comWidth={67}
                    comHeight={27}
                    compLeft={15}
                    compRight={0}
                    compType="Text"
                  >{`Sold 99`}</Text>
                </Row>
                <Row
                  className="items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[53%]"
                  compId="1069:1185"
                  comWidth={226}
                  comHeight={50}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Button
                    className="bg-deep_orange_400 font-normal not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                    compId="173"
                    comWidth={160}
                    comHeight={50}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                  <Image
                    src={"images/img_wishlist_4.svg"}
                    className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] object-contain lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px] w-[50px]"
                    compId="1069:1188"
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
              compId="943"
              comWidth={512}
              comHeight={619}
              compLeft={544}
              compRight={544}
              compType="Stack"
            >
              <Image
                src={"images/img_border_3.svg"}
                className="absolute lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] inset-[0] object-cover rounded-radius32 w-[100%]"
                compId="1069:1192"
                comWidth={512}
                comHeight={619}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="border"
              />
              <Column
                className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[83%]"
                compId="1069:1196"
                comWidth={426.21}
                comHeight={546}
                compLeft={42.21}
                compRight={43.58}
                compType="Column"
              >
                <Image
                  src={"images/img_image_26.svg"}
                  className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] object-cover w-[100%]"
                  compId="1069:1193"
                  comWidth={426.21}
                  comHeight={313}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="image"
                />
                <Column
                  className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[69%]"
                  compId="1069:1197"
                  comWidth={293}
                  comHeight={76}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                    compId="1069:1198"
                    comWidth={293}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Smart Watch New Series`}</Text>
                  <Text
                    className="font-medium mx-[auto] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[37%]"
                    compId="1069:1199"
                    comWidth={107}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$1000.00`}</Text>
                </Column>
                <Row
                  className="items-start justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[37%]"
                  compId="1069:1200"
                  comWidth={158}
                  comHeight={27}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Row
                    className="items-center justify-between w-[37%]"
                    compId="1069:1201"
                    comWidth={59}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1069:1202"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star1"
                    />
                    <Text
                      className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                      compId="1069:1203"
                      comWidth={27}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`5.0`}</Text>
                  </Row>
                  <Line
                    className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] opacity-op5 rotate-[90deg] w-[1px]"
                    compId="1069:1204"
                    comWidth={1}
                    comHeight={22}
                    compLeft={16}
                    compRight={0}
                    compType="Line"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                    compId="1069:1206"
                    comWidth={67}
                    comHeight={27}
                    compLeft={15}
                    compRight={0}
                    compType="Text"
                  >{`Sold 99`}</Text>
                </Row>
                <Row
                  className="items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[53%]"
                  compId="1069:1207"
                  comWidth={226}
                  comHeight={50}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Button
                    className="bg-deep_orange_400 font-normal not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                    compId="174"
                    comWidth={160}
                    comHeight={50}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                  <Image
                    src={"images/img_wishlist_5.svg"}
                    className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] object-contain lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px] w-[50px]"
                    compId="1069:1210"
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
              compId="945"
              comWidth={512}
              comHeight={619}
              compLeft={1088}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_border_3.svg"}
                className="absolute lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] inset-[0] object-cover rounded-radius32 w-[100%]"
                compId="1069:1214"
                comWidth={512}
                comHeight={619}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="border"
              />
              <Column
                className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[83%]"
                compId="1069:1218"
                comWidth={426.21}
                comHeight={546}
                compLeft={42.21}
                compRight={43.58}
                compType="Column"
              >
                <Image
                  src={"images/img_image_27.svg"}
                  className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] object-cover w-[100%]"
                  compId="1069:1215"
                  comWidth={426.21}
                  comHeight={313}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="image"
                />
                <Column
                  className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[52%]"
                  compId="1069:1219"
                  comWidth={222}
                  comHeight={76}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                    compId="1069:1220"
                    comWidth={222}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Camera HD + Lens`}</Text>
                  <Text
                    className="font-medium mx-[auto] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[48%]"
                    compId="1069:1221"
                    comWidth={107}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$1000.00`}</Text>
                </Column>
                <Row
                  className="items-start justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[37%]"
                  compId="1069:1222"
                  comWidth={158}
                  comHeight={27}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Row
                    className="items-center justify-between w-[37%]"
                    compId="1069:1223"
                    comWidth={59}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_star1_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1069:1224"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Star1"
                    />
                    <Text
                      className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                      compId="1069:1225"
                      comWidth={27}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`5.0`}</Text>
                  </Row>
                  <Line
                    className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] opacity-op5 rotate-[90deg] w-[1px]"
                    compId="1069:1226"
                    comWidth={1}
                    comHeight={22}
                    compLeft={16}
                    compRight={0}
                    compType="Line"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                    compId="1069:1228"
                    comWidth={67}
                    comHeight={27}
                    compLeft={15}
                    compRight={0}
                    compType="Text"
                  >{`Sold 99`}</Text>
                </Row>
                <Row
                  className="items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[53%]"
                  compId="1069:1229"
                  comWidth={226}
                  comHeight={50}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Button
                    className="bg-deep_orange_400 font-normal not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[71%]"
                    compId="175"
                    comWidth={160}
                    comHeight={50}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                  <Image
                    src={"images/img_wishlist_1.svg"}
                    className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] object-contain lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px] w-[50px]"
                    compId="1069:1232"
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
          </Grid>
        </Column>
        <Row
          className="bg-deep_orange_400 font-poppins items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
          compId="909"
          comWidth={1920}
          comHeight={245}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Image
            src={"images/img_newsletter_1.svg"}
            className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] xl:mb-[49px] 2xl:mb-[55px] 3xl:mb-[66px] mb-[74px] lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] ml-[256px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] mt-[75px] lg:my-[43px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
            compId="1069:1238"
            comWidth={96}
            comHeight={96}
            compLeft={256}
            compRight={0}
            compType="Image"
            alt="Newsletter"
          />
          <Column
            className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[40px] xl:my-[46px] 2xl:my-[51px] 3xl:my-[62px] my-[69px] w-[33%]"
            compId="1069:1246"
            comWidth={637}
            comHeight={107}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold font-montserrat lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[100%]"
              compId="1069:1247"
              comWidth={637}
              comHeight={59}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Join our newsletter now!`}</Text>
            <Text
              className="font-normal font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[75%]"
              compId="1069:1248"
              comWidth={480}
              comHeight={32}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`Register now and get our latest updates and promos.`}</Text>
          </Column>
          <Stack
            className="lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] h-[76px] 3xl:mb-[75px] mb-[84px] 3xl:ml-[105px] ml-[117px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] 3xl:mt-[76px] mt-[85px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] w-[27%]"
            compId="947"
            comWidth={526}
            comHeight={76}
            compLeft={117}
            compRight={0}
            compType="Stack"
          >
            <Input
              className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[15px] pb-[26.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pt-[14px] pt-[25.545px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500 text-gray_500 text-left tracking-ls1 w-[100%]"
              compId="179"
              comWidth={526}
              comHeight={76}
              compLeft={0}
              compRight={0}
              compType="EditText"
              name="Group179"
              placeholder={`Enter your email`}
            ></Input>
            <Button
              className="absolute bg-gray_800 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[2%] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
              compId="176"
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
          compId="1069:1249"
          comWidth={1920}
          comHeight={585}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="bg-deep_orange_400_cf items-center justify-end w-[100%]"
            compId="913"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-start justify-start lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
              compId="910"
              comWidth={1920}
              comHeight={260}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] w-[20%]"
                compId="912"
                comWidth={381}
                comHeight={246}
                compLeft={160}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[29%]"
                  compId="1069:1260"
                  comWidth={112}
                  comHeight={54}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Tronix`}</Text>
                <Text
                  className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                  compId="1069:1261"
                  comWidth={381}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                <Row
                  className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                  compId="1069:1296"
                  comWidth={243}
                  comHeight={32}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Image
                    src={"images/img_call_2.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1069:1297"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Call"
                  />
                  <Text
                    className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                    compId="1069:1299"
                    comWidth={211}
                    comHeight={32}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`+1234567890`}</Text>
                </Row>
                <Row
                  className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[64%]"
                  compId="1069:1300"
                  comWidth={243}
                  comHeight={32}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Image
                    src={"images/img_email_2.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1069:1301"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Email"
                  />
                  <Text
                    className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                    compId="1069:1303"
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
                compId="1069:1262"
                comWidth={120}
                comHeight={260}
                compLeft={435}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                  compId="1069:1263"
                  comWidth={120}
                  comHeight={29}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Company`}</Text>
                <Column
                  className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[67%]"
                  compId="1069:1264"
                  comWidth={80}
                  comHeight={199}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[68%]"
                    compId="1069:1265"
                    comWidth={54}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                    compId="1069:1266"
                    comWidth={80}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Products`}</Text>
                  <Text
                    className="font-normal lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] mr-[6px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[93%]"
                    compId="1069:1267"
                    comWidth={74}
                    comHeight={27}
                    compLeft={0}
                    compRight={6}
                    compType="Text"
                  >{`Contact`}</Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[50%]"
                    compId="1069:1268"
                    comWidth={40}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Blog`}</Text>
                  <Text
                    className="font-normal lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[90%]"
                    compId="1069:1269"
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
                compId="1069:1270"
                comWidth={164}
                comHeight={217}
                compLeft={152}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[91%]"
                  compId="1069:1271"
                  comWidth={150}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Information`}</Text>
                <Column
                  className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="967"
                  comWidth={164}
                  comHeight={156}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="1069:1272"
                    comWidth={164}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[65%]"
                      compId="1069:1273"
                      comWidth={107}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Help Center`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                      compId="1069:1274"
                      comWidth={164}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Payment Methods`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[88%]"
                      compId="1069:1275"
                      comWidth={145}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Return & Refund`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[74%]"
                      compId="1069:1276"
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
                compId="1069:1277"
                comWidth={216}
                comHeight={117}
                compLeft={108}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[56%]"
                  compId="1069:1278"
                  comWidth={122}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Follow Us`}</Text>
                <Column
                  className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="968"
                  comWidth={216}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_sosmedia_5.svg"}
                    className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-cover w-[100%]"
                    compId="1069:1279"
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
              compId="1069:1304"
              comWidth={1600}
              comHeight={1}
              compLeft={10}
              compRight={10}
              compType="Line"
            />
            <Row
              className="items-center justify-between lg:mb-[31px] xl:mb-[36px] 2xl:mb-[40px] 3xl:mb-[48px] mb-[54px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] w-[100%]"
              compId="911"
              comWidth={1920}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-normal lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_800 text-left w-[15%]"
                compId="1069:1258"
                comWidth={287}
                comHeight={21}
                compLeft={160}
                compRight={0}
                compType="Text"
              >{`Copyright © 2021 Tronix. All Right Reseved`}</Text>
              <Image
                src={"images/img_payment_2.svg"}
                className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] mr-[160px] lg:mr-[93px] object-contain w-[7%]"
                compId="1069:1251"
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

export default CategorieswithHorizontalFiltersPage;
