import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { Line } from "components/Line";
import { List } from "components/List";
import { Button } from "components/Button";
import { Input } from "components/Input";

const CartPage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins items-start justify-start mx-[auto] w-[100%]"
        compId="337:242"
        comWidth={1920}
        comHeight={2304}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="w-[100%]"
          compId="1232"
          comWidth={1920}
          comHeight={120}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <header
            className="w-[100%]"
            compId="260"
            comWidth={1920}
            comHeight={120}
            compLeft={0}
            compRight={0}
            compType="Header"
          >
            <Row
              className="items-center justify-start rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[100%]"
              compId="1197"
              comWidth={1920}
              comHeight={120}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-semibold xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:my-[19px] xl:my-[22px] 2xl:my-[24px] 3xl:my-[29px] my-[33px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[6%]"
                compId="1057:520"
                comWidth={112}
                comHeight={54}
                compLeft={160}
                compRight={0}
                compType="Text"
              >{`Tronix`}</Text>
              <Row
                className="bg-bluegray_100_3f items-center justify-center 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] my-[36px] rounded-radius8 w-[28%]"
                compId="1195"
                comWidth={544}
                comHeight={48}
                compLeft={128}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[20%]"
                  compId="1057:523"
                  comWidth={109}
                  comHeight={27}
                  compLeft={32}
                  compRight={0}
                  compType="Text"
                >{`Search here`}</Text>
                <Image
                  src={"images/img_search_1.svg"}
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[207px] xl:ml-[236px] 2xl:ml-[266px] 3xl:ml-[319px] ml-[355px] object-contain rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  compId="1057:524"
                  comWidth={48}
                  comHeight={48}
                  compLeft={355}
                  compRight={0}
                  compType="Image"
                  alt="search"
                />
              </Row>
              <Row
                className="items-center justify-center lg:mb-[27px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] mb-[47px] ml-[103px] lg:ml-[60px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] mt-[46px] w-[25%]"
                compId="1231"
                comWidth={473}
                comHeight={27}
                compLeft={103}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                  compId="1057:540"
                  comWidth={54}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Home`}</Text>
                <Text
                  className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                  compId="1057:541"
                  comWidth={54}
                  comHeight={27}
                  compLeft={48}
                  compRight={0}
                  compType="Text"
                >{`About`}</Text>
                <Text
                  className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[15%]"
                  compId="1057:542"
                  comWidth={70}
                  comHeight={27}
                  compLeft={48}
                  compRight={0}
                  compType="Text"
                >{`Product`}</Text>
                <Text
                  className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[8%]"
                  compId="1057:543"
                  comWidth={40}
                  comHeight={27}
                  compLeft={48}
                  compRight={0}
                  compType="Text"
                >{`Blog`}</Text>
                <Text
                  className="cursor-pointer hover:font-normal font-normal font-nunitosans lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] my-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[13%]"
                  compId="1057:544"
                  comWidth={63}
                  comHeight={25}
                  compLeft={48}
                  compRight={0}
                  compType="Text"
                >{`Contact`}</Text>
              </Row>
              <Row
                className="items-end justify-center lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] mb-[44px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[8%]"
                compId="1193"
                comWidth={160}
                comHeight={44}
                compLeft={80}
                compRight={0}
                compType="Row"
              >
                <Stack
                  className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] h-[44px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px] w-[44px]"
                  compId="1227"
                  comWidth={44}
                  comHeight={44}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_shoppingbag_5.svg"}
                    className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] left-[0] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                    compId="1057:531"
                    comWidth={32}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="ShoppingBag"
                  />
                  <Column
                    className="absolute bg-deep_orange_400 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] items-center justify-start lg:py-[1px] 3xl:py-[2px] 2xl:py-[2px] xl:py-[2px] py-[3px] right-[0] rounded-radius50 top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="259"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mx-[auto] not-italic 3xl:text-fs10 text-fs12 lg:text-fs7 xl:text-fs8 2xl:text-fs9 text-gray_50 text-left w-[67%]"
                      compId="1057:538"
                      comWidth={16}
                      comHeight={18}
                      compLeft={4}
                      compRight={4}
                      compType="Text"
                    >{`99`}</Text>
                  </Column>
                </Stack>
                <Image
                  src={"images/img_email_8.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                  compId="1057:533"
                  comWidth={32}
                  comHeight={32}
                  compLeft={20}
                  compRight={0}
                  compType="Image"
                  alt="Email"
                />
                <Image
                  src={"images/img_menu.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                  compId="1057:535"
                  comWidth={32}
                  comHeight={32}
                  compLeft={32}
                  compRight={0}
                  compType="Image"
                  alt="Menu"
                />
              </Row>
            </Row>
          </header>
        </Column>
        <Row
          className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] xl:mx-[106px] 2xl:mx-[120px] 3xl:mx-[144px] mx-[160px] lg:mx-[93px] w-[9%]"
          compId="337:259"
          comWidth={168}
          comHeight={27}
          compLeft={160}
          compRight={160}
          compType="Row"
        >
          <Text
            className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[32%]"
            compId="337:260"
            comWidth={54}
            comHeight={27}
            compLeft={0}
            compRight={0}
            compType="Text"
          >{`Home`}</Text>
          <Text
            className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[7%]"
            compId="337:262"
            comWidth={11}
            comHeight={27}
            compLeft={16}
            compRight={0}
            compType="Text"
          >{`>`}</Text>
          <Text
            className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[42%]"
            compId="337:261"
            comWidth={71}
            comHeight={27}
            compLeft={16}
            compRight={0}
            compType="Text"
          >{`My Cart`}</Text>
        </Row>
        <Column
          className="font-montserrat items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[21px] w-[100%]"
          compId="1233"
          comWidth={1920}
          comHeight={2104}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Text
            className="font-bold mx-[auto] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[10%]"
            compId="337:243"
            comWidth={195}
            comHeight={59}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`My Cart`}</Text>
          <Row
            className="font-poppins items-center justify-center lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] mt-[72px] mx-[auto] w-[42%]"
            compId="337:244"
            comWidth={804}
            comHeight={56}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Row
              className="items-center justify-start w-[22%]"
              compId="337:245"
              comWidth={175}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="border-2 border-deep_orange_400 border-solid lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] items-center py-[10px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                compId="257"
                comWidth={56}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium mx-[auto] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[16%]"
                  compId="337:248"
                  comWidth={9}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`1`}</Text>
              </Column>
              <Text
                className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[54%]"
                compId="337:246"
                comWidth={95}
                comHeight={36}
                compLeft={24}
                compRight={0}
                compType="Text"
              >{`My Cart`}</Text>
            </Row>
            <Line
              className="bg-gray_800 h-[2px] lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:my-[15px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[24px] my-[27px] w-[38%]"
              compId="337:249"
              comWidth={304}
              comHeight={2}
              compLeft={64}
              compRight={0}
              compType="Line"
            />
            <Row
              className="items-center justify-start lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] w-[25%]"
              compId="337:250"
              comWidth={197}
              comHeight={56}
              compLeft={64}
              compRight={0}
              compType="Row"
            >
              <Column
                className="border-2 border-bluegray_100 border-solid lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] items-center py-[10px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                compId="258"
                comWidth={56}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium mx-[auto] text-bluegray_100 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[25%]"
                  compId="337:253"
                  comWidth={14}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`2`}</Text>
              </Column>
              <Text
                className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] text-bluegray_100 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[59%]"
                compId="337:251"
                comWidth={117}
                comHeight={36}
                compLeft={24}
                compRight={0}
                compType="Text"
              >{`Checkout`}</Text>
            </Row>
          </Row>
          <Row
            className="font-poppins items-start justify-start lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] mt-[72px] w-[100%]"
            compId="1225"
            comWidth={1920}
            comHeight={855}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="items-center justify-start xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] w-[50%]"
              compId="1224"
              comWidth={952}
              comHeight={856}
              compLeft={160}
              compRight={0}
              compType="Column"
            >
              <Column
                className="w-[100%]"
                compId="1199"
                comWidth={952}
                comHeight={63}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-start w-[100%]"
                  compId="1198"
                  comWidth={952}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkedbox_1.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="684:11"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Checkedbox"
                  />
                  <Text
                    className="font-medium lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[9%]"
                    compId="337:270"
                    comWidth={83}
                    comHeight={27}
                    compLeft={56}
                    compRight={0}
                    compType="Text"
                  >{`Select All`}</Text>
                </Row>
                <Line
                  className="bg-deep_orange_400 h-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] opacity-op5 w-[100%]"
                  compId="337:277"
                  comWidth={952}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
              </Column>
              <List
                className="gap-[0] lg:mb-[22px] xl:mb-[26px] 2xl:mb-[29px] 3xl:mb-[35px] mb-[39px] min-h-[auto] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] mt-[42px] w-[100%]"
                compId="1230"
                comWidth={951.97}
                comHeight={712}
                compLeft={0}
                compRight={0.03}
                compType="List"
                orientation="vertical"
              >
                <Row
                  className="items-center justify-between lg:my-[23px] xl:my-[26px] 2xl:my-[30px] 3xl:my-[36px] my-[40px] w-[100%]"
                  compId="1201"
                  comWidth={951.97}
                  comHeight={184}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkedbox_2.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[47px] xl:mb-[54px] 2xl:mb-[61px] 3xl:mb-[73px] mb-[82px] lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] mt-[78px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="684:2"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Checkedbox"
                  />
                  <Image
                    src={"images/img_maskgroup_27.svg"}
                    className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] 2xl:mb-[3px] mb-[4px] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                    compId="455:71"
                    comWidth={180}
                    comHeight={180}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Column
                    className="items-start w-[66%]"
                    compId="1203"
                    comWidth={632.97}
                    comHeight={184}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[40%]"
                      compId="337:282"
                      comWidth={256}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`USB Speaker Portable`}</Text>
                    <Column
                      className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="1234"
                      comWidth={632.97}
                      comHeight={55.940002}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-between w-[100%]"
                        compId="1202"
                        comWidth={632.97}
                        comHeight={55.940002}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-medium lg:mb-[11px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19.94px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[15%]"
                          compId="337:283"
                          comWidth={92}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`$100.99`}</Text>
                        <Image
                          src={"images/img_.svg"}
                          className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.94px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] object-contain lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[33.94px]"
                          compId="337:292"
                          comWidth={33.94}
                          comHeight={33.94}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt=""
                        />
                      </Row>
                    </Column>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28.06px] w-[27%]"
                      compId="337:285"
                      comWidth={171}
                      comHeight={48}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_decrease_1.svg"}
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain rounded-radius8 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        compId="337:288"
                        comWidth={48}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="decrease"
                      />
                      <Text
                        className="font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[34px] my-[10.5px] lg:my-[6px] 2xl:my-[7px] xl:my-[7px] 3xl:my-[9px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[4%]"
                        compId="337:291"
                        comWidth={7}
                        comHeight={27}
                        compLeft={34}
                        compRight={0}
                        compType="Text"
                      >{`1`}</Text>
                      <Image
                        src={"images/img_increase_1.svg"}
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[34px] object-contain rounded-radius8 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        compId="337:286"
                        comWidth={48}
                        comHeight={48}
                        compLeft={34}
                        compRight={0}
                        compType="Image"
                        alt="increase"
                      />
                    </Row>
                  </Column>
                </Row>
                <Line
                  className="self-center w-[50%] h-[1px] opacity-op5 bg-deep_orange_400"
                  compId="823:83"
                  comWidth={952}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Row
                  className="items-center justify-between lg:my-[23px] xl:my-[26px] 2xl:my-[30px] 3xl:my-[36px] my-[40px] w-[100%]"
                  compId="1204"
                  comWidth={951.97}
                  comHeight={184}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkedbox_2.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[47px] xl:mb-[54px] 2xl:mb-[61px] 3xl:mb-[73px] mb-[82px] lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] mt-[78px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="684:5"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Checkedbox"
                  />
                  <Image
                    src={"images/img_maskgroup_28.svg"}
                    className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] 2xl:mb-[3px] mb-[4px] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                    compId="653:10"
                    comWidth={180}
                    comHeight={180}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Column
                    className="items-start w-[66%]"
                    compId="1206"
                    comWidth={632.97}
                    comHeight={184}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[22%]"
                      compId="653:13"
                      comWidth={141}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Joystick Pro`}</Text>
                    <Column
                      className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="1235"
                      comWidth={632.97}
                      comHeight={55.940002}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-between w-[100%]"
                        compId="1205"
                        comWidth={632.97}
                        comHeight={55.940002}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-medium lg:mb-[11px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19.94px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[15%]"
                          compId="653:14"
                          comWidth={92}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`$100.99`}</Text>
                        <Image
                          src={"images/img_.svg"}
                          className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.94px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] object-contain lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[33.94px]"
                          compId="653:22"
                          comWidth={33.94}
                          comHeight={33.94}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt=""
                        />
                      </Row>
                    </Column>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28.06px] w-[27%]"
                      compId="653:15"
                      comWidth={171}
                      comHeight={48}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_decrease_1.svg"}
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain rounded-radius8 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        compId="653:18"
                        comWidth={48}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="decrease"
                      />
                      <Text
                        className="font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[34px] my-[10.5px] lg:my-[6px] 2xl:my-[7px] xl:my-[7px] 3xl:my-[9px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[4%]"
                        compId="653:21"
                        comWidth={7}
                        comHeight={27}
                        compLeft={34}
                        compRight={0}
                        compType="Text"
                      >{`1`}</Text>
                      <Image
                        src={"images/img_increase_1.svg"}
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[34px] object-contain rounded-radius8 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        compId="653:16"
                        comWidth={48}
                        comHeight={48}
                        compLeft={34}
                        compRight={0}
                        compType="Image"
                        alt="increase"
                      />
                    </Row>
                  </Column>
                </Row>
                <Line
                  className="self-center w-[50%] h-[1px] opacity-op5 bg-deep_orange_400"
                  compId="823:83"
                  comWidth={952}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Row
                  className="items-center justify-between lg:my-[23px] xl:my-[26px] 2xl:my-[30px] 3xl:my-[36px] my-[40px] w-[100%]"
                  compId="1207"
                  comWidth={951.97}
                  comHeight={184}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkedbox_2.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[47px] xl:mb-[54px] 2xl:mb-[61px] 3xl:mb-[73px] mb-[82px] lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] mt-[78px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="823:99"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Checkedbox"
                  />
                  <Image
                    src={"images/img_maskgroup_29.svg"}
                    className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] 2xl:mb-[3px] mb-[4px] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                    compId="823:86"
                    comWidth={180}
                    comHeight={180}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Column
                    className="items-start w-[66%]"
                    compId="1209"
                    comWidth={632.97}
                    comHeight={184}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[30%]"
                      compId="823:89"
                      comWidth={191}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Smartphone 5G`}</Text>
                    <Column
                      className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="1236"
                      comWidth={632.97}
                      comHeight={55.93994}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-between w-[100%]"
                        compId="1208"
                        comWidth={632.97}
                        comHeight={55.93994}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-medium lg:mb-[11px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19.94px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[15%]"
                          compId="823:90"
                          comWidth={92}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`$100.99`}</Text>
                        <Image
                          src={"images/img_.svg"}
                          className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.94px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] object-contain lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[33.94px]"
                          compId="823:98"
                          comWidth={33.94}
                          comHeight={33.94}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt=""
                        />
                      </Row>
                    </Column>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28.06px] w-[27%]"
                      compId="823:91"
                      comWidth={171}
                      comHeight={48}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_decrease_1.svg"}
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain rounded-radius8 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        compId="823:94"
                        comWidth={48}
                        comHeight={48}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="decrease"
                      />
                      <Text
                        className="font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[34px] my-[10.5px] lg:my-[6px] 2xl:my-[7px] xl:my-[7px] 3xl:my-[9px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[4%]"
                        compId="823:97"
                        comWidth={7}
                        comHeight={27}
                        compLeft={34}
                        compRight={0}
                        compType="Text"
                      >{`1`}</Text>
                      <Image
                        src={"images/img_increase_1.svg"}
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[34px] object-contain rounded-radius8 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        compId="823:92"
                        comWidth={48}
                        comHeight={48}
                        compLeft={34}
                        compRight={0}
                        compType="Image"
                        alt="increase"
                      />
                    </Row>
                  </Column>
                </Row>
              </List>
            </Column>
            <Column
              className="lg:mb-[184px] xl:mb-[211px] 2xl:mb-[237px] 3xl:mb-[285px] mb-[317px] ml-[104px] lg:ml-[60px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] mt-[63px] w-[28%]"
              compId="1220"
              comWidth={544}
              comHeight={475}
              compLeft={104}
              compRight={0}
              compType="Column"
            >
              <Row
                className="bg-gray_300_3f border border-deep_orange_400 border-solid items-center justify-start rounded-radius16 w-[100%]"
                compId="1200"
                comWidth={544}
                comHeight={104}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_icon_7.svg"}
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] ml-[72.5px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                  compId="655:38"
                  comWidth={56}
                  comHeight={56}
                  compLeft={72.5}
                  compRight={0}
                  compType="Image"
                  alt="icon"
                />
                <Text
                  className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[19px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] my-[34px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[48%]"
                  compId="655:43"
                  comWidth={263}
                  comHeight={36}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >{`Have a coupon code?`}</Text>
                <Image
                  src={"images/img_chevrondown_3.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] my-[36px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                  compId="655:45"
                  comWidth={32}
                  comHeight={32}
                  compLeft={24}
                  compRight={0}
                  compType="Image"
                  alt="chevrondown"
                />
              </Row>
              <Column
                className="bg-gray_50 border border-deep_orange_400 border-solid items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius16 w-[100%]"
                compId="1218"
                comWidth={544}
                comHeight={339}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[22%]"
                  compId="653:26"
                  comWidth={120}
                  comHeight={36}
                  compLeft={32}
                  compRight={32}
                  compType="Text"
                >{`Summary`}</Text>
                <Column
                  className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="1237"
                  comWidth={544}
                  comHeight={207}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-between mx-[auto] w-[88%]"
                    compId="653:28"
                    comWidth={479}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Text
                      className="font-medium xl:mb-[2px] 3xl:mb-[3px] mb-[4px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] lg:my-[2px] 2xl:my-[3px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[10%]"
                      compId="337:313"
                      comWidth={46}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Total`}</Text>
                    <Text
                      className="font-medium text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[20%]"
                      compId="337:314"
                      comWidth={96}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`$202.00`}</Text>
                  </Row>
                  <Button
                    className="bg-deep_orange_400 font-medium lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] mx-[auto] lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] py-[20.045px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[88%]"
                    compId="255"
                    comWidth={480}
                    comHeight={64}
                    compLeft={10}
                    compRight={10}
                    compType="Button"
                  >{`Checkout`}</Button>
                  <Text
                    className="font-medium lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[32%]"
                    compId="337:311"
                    comWidth={175}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Continue Shopping`}</Text>
                </Column>
              </Column>
            </Column>
          </Row>
          <Row
            className="bg-deep_orange_400 font-poppins items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
            compId="1210"
            comWidth={1920}
            comHeight={245}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Image
              src={"images/img_newsletter.svg"}
              className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] xl:mb-[49px] 2xl:mb-[55px] 3xl:mb-[66px] mb-[74px] lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] ml-[256px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] mt-[75px] lg:my-[43px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
              compId="1057:428"
              comWidth={96}
              comHeight={96}
              compLeft={256}
              compRight={0}
              compType="Image"
              alt="Newsletter"
            />
            <Column
              className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[40px] xl:my-[46px] 2xl:my-[51px] 3xl:my-[62px] my-[69px] w-[33%]"
              compId="1057:436"
              comWidth={637}
              comHeight={107}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold font-montserrat lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[100%]"
                compId="1057:437"
                comWidth={637}
                comHeight={59}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Join our newsletter now!`}</Text>
              <Text
                className="font-normal font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[75%]"
                compId="1057:438"
                comWidth={480}
                comHeight={32}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Register now and get our latest updates and promos.`}</Text>
            </Column>
            <Stack
              className="lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] h-[76px] 3xl:mb-[75px] mb-[84px] 3xl:ml-[105px] ml-[117px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] 3xl:mt-[76px] mt-[85px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] w-[27%]"
              compId="1229"
              comWidth={526}
              comHeight={76}
              compLeft={117}
              compRight={0}
              compType="Stack"
            >
              <Input
                className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[15px] pb-[26.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pt-[14px] pt-[25.545px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500 text-gray_500 text-left tracking-ls1 w-[100%]"
                compId="261"
                comWidth={526}
                comHeight={76}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="Group261"
                placeholder={`Enter your email`}
              ></Input>
              <Button
                className="absolute bg-gray_800 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[2%] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
                compId="256"
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
            compId="1057:439"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Footer"
          >
            <Column
              className="bg-deep_orange_400_cf items-center justify-end w-[100%]"
              compId="1214"
              comWidth={1920}
              comHeight={585}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-start lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
                compId="1211"
                comWidth={1920}
                comHeight={260}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start justify-start 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] w-[20%]"
                  compId="1213"
                  comWidth={381}
                  comHeight={246}
                  compLeft={160}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[29%]"
                    compId="1057:450"
                    comWidth={112}
                    comHeight={54}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Tronix`}</Text>
                  <Text
                    className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                    compId="1057:451"
                    comWidth={381}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                  <Row
                    className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                    compId="1057:486"
                    comWidth={243}
                    comHeight={32}
                    compLeft={0}
                    compRight={10}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_call_2.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1057:487"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Call"
                    />
                    <Text
                      className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                      compId="1057:489"
                      comWidth={211}
                      comHeight={32}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`+1234567890`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[64%]"
                    compId="1057:490"
                    comWidth={243}
                    comHeight={32}
                    compLeft={0}
                    compRight={10}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_email_2.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1057:491"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Email"
                    />
                    <Text
                      className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                      compId="1057:493"
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
                  compId="1057:452"
                  comWidth={120}
                  comHeight={260}
                  compLeft={435}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                    compId="1057:453"
                    comWidth={120}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Company`}</Text>
                  <Column
                    className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[67%]"
                    compId="1057:454"
                    comWidth={80}
                    comHeight={199}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[68%]"
                      compId="1057:455"
                      comWidth={54}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`About`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                      compId="1057:456"
                      comWidth={80}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Products`}</Text>
                    <Text
                      className="font-normal lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] mr-[6px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[93%]"
                      compId="1057:457"
                      comWidth={74}
                      comHeight={27}
                      compLeft={0}
                      compRight={6}
                      compType="Text"
                    >{`Contact`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[50%]"
                      compId="1057:458"
                      comWidth={40}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Blog`}</Text>
                    <Text
                      className="font-normal lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[90%]"
                      compId="1057:459"
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
                  compId="1057:460"
                  comWidth={164}
                  comHeight={217}
                  compLeft={152}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[91%]"
                    compId="1057:461"
                    comWidth={150}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Information`}</Text>
                  <Column
                    className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="1238"
                    comWidth={164}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="1057:462"
                      comWidth={164}
                      comHeight={156}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[65%]"
                        compId="1057:463"
                        comWidth={107}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Help Center`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                        compId="1057:464"
                        comWidth={164}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Payment Methods`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[88%]"
                        compId="1057:465"
                        comWidth={145}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Return & Refund`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[74%]"
                        compId="1057:466"
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
                  compId="1057:467"
                  comWidth={216}
                  comHeight={117}
                  compLeft={108}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[56%]"
                    compId="1057:468"
                    comWidth={122}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Follow Us`}</Text>
                  <Column
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="1239"
                    comWidth={216}
                    comHeight={56}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Image
                      src={"images/img_sosmedia_11.svg"}
                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-cover w-[100%]"
                      compId="1057:469"
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
                compId="1057:494"
                comWidth={1600}
                comHeight={1}
                compLeft={10}
                compRight={10}
                compType="Line"
              />
              <Row
                className="items-center justify-between lg:mb-[31px] xl:mb-[36px] 2xl:mb-[40px] 3xl:mb-[48px] mb-[54px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] w-[100%]"
                compId="1212"
                comWidth={1920}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_800 text-left w-[15%]"
                  compId="1057:448"
                  comWidth={287}
                  comHeight={21}
                  compLeft={160}
                  compRight={0}
                  compType="Text"
                >{`Copyright © 2021 Tronix. All Right Reseved`}</Text>
                <Image
                  src={"images/img_payment_3.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] mr-[160px] lg:mr-[93px] object-contain w-[7%]"
                  compId="1057:441"
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

export default CartPage;
