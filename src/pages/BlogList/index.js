import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Stack } from "components/Stack";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { List } from "components/List";
import { Grid } from "components/Grid";

const BlogListPage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins mx-[auto] w-[100%]"
        compId="831:167"
        comWidth={1920}
        comHeight={2897}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="items-start justify-start w-[100%]"
          compId="1110"
          comWidth={1920}
          comHeight={2897}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Column
            className="w-[100%]"
            compId="1122"
            comWidth={1920}
            comHeight={180}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <header
              className="w-[100%]"
              compId="230"
              comWidth={1920}
              comHeight={180}
              compLeft={0}
              compRight={0}
              compType="Header"
            >
              <Column
                className="w-[100%]"
                compId="1074:1682"
                comWidth={1920}
                comHeight={180}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-between w-[100%]"
                  compId="1074:1695"
                  comWidth={1920}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_sosmedia.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain w-[10%]"
                    compId="1074:1708"
                    comWidth={192}
                    comHeight={24}
                    compLeft={160}
                    compRight={0}
                    compType="Image"
                    alt="sosmedia"
                  />
                  <Row
                    className="items-center justify-center xl:mb-[10px] 3xl:mb-[14px] mb-[16px] xl:mr-[112px] 2xl:mr-[126px] 3xl:mr-[151px] mr-[168px] lg:mr-[98px] xl:mt-[11px] 3xl:mt-[15px] mt-[17px] 2xl:my-[12px] lg:my-[9px] w-[30%]"
                    compId="1120"
                    comWidth={575}
                    comHeight={27}
                    compLeft={0}
                    compRight={168}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-start w-[30%]"
                      compId="1074:1696"
                      comWidth={172}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_call_7.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1074:1697"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Call"
                      />
                      <Text
                        className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[77%]"
                        compId="1074:1699"
                        comWidth={132}
                        comHeight={27}
                        compLeft={16}
                        compRight={0}
                        compType="Text"
                      >{`+12 345 6789 0`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[39%]"
                      compId="1074:1700"
                      comWidth={223}
                      comHeight={27}
                      compLeft={32}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_email.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1074:1701"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Email"
                      />
                      <Text
                        className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[82%]"
                        compId="1074:1703"
                        comWidth={183}
                        comHeight={27}
                        compLeft={16}
                        compRight={0}
                        compType="Text"
                      >{`support@tronix.com`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[20%]"
                      compId="1074:1704"
                      comWidth={116}
                      comHeight={27}
                      compLeft={32}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_user_2.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1074:1705"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="User"
                      />
                      <Text
                        className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[66%]"
                        compId="1074:1707"
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
                  compId="1113"
                  comWidth={1920}
                  comHeight={120}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Column
                    className="absolute inset-[0] items-center justify-start rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[100%]"
                    compId="1091"
                    comWidth={1920}
                    comHeight={120}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Line
                      className="bg-gray_500 h-[1px] mx-[auto] opacity-op25 w-[83%]"
                      compId="1074:1692"
                      comWidth={1598}
                      comHeight={1}
                      compLeft={10}
                      compRight={10}
                      compType="Line"
                    />
                    <Row
                      className="items-start justify-start lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[100%]"
                      compId="1090"
                      comWidth={1920}
                      comHeight={55}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-semibold xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] mt-[1px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[6%]"
                        compId="1074:1685"
                        comWidth={112}
                        comHeight={54}
                        compLeft={160}
                        compRight={0}
                        compType="Text"
                      >{`Tronix`}</Text>
                      <Stack
                        className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] h-[44px] mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] 2xl:ml-[1044px] 3xl:ml-[1253px] ml-[1392px] lg:ml-[812px] xl:ml-[928px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px] w-[44px]"
                        compId="1115"
                        comWidth={44}
                        comHeight={44}
                        compLeft={1392}
                        compRight={0}
                        compType="Stack"
                      >
                        <Image
                          src={"images/img_shoppingbag_4.svg"}
                          className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] left-[0] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                          compId="1074:1686"
                          comWidth={32}
                          comHeight={32}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="ShoppingBag"
                        />
                        <Column
                          className="absolute bg-deep_orange_400 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] items-center justify-start lg:py-[1px] 3xl:py-[2px] 2xl:py-[2px] xl:py-[2px] py-[3px] right-[0] rounded-radius50 top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="229"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-normal mx-[auto] not-italic 3xl:text-fs10 text-fs12 lg:text-fs7 xl:text-fs8 2xl:text-fs9 text-gray_50 text-left w-[67%]"
                            compId="1074:1691"
                            comWidth={16}
                            comHeight={18}
                            compLeft={4}
                            compRight={4}
                            compType="Text"
                          >{`99`}</Text>
                        </Column>
                      </Stack>
                      <Image
                        src={"images/img_email_7.svg"}
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                        compId="1074:1688"
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
                    compId="1074:1717"
                    comWidth={1137}
                    comHeight={48}
                    compLeft={0}
                    compRight={351}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-between mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] w-[42%]"
                      compId="1121"
                      comWidth={473}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                        compId="1074:1718"
                        comWidth={54}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Home`}</Text>
                      <Text
                        className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                        compId="1074:1719"
                        comWidth={54}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`About`}</Text>
                      <Text
                        className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[15%]"
                        compId="1074:1720"
                        comWidth={70}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Product`}</Text>
                      <Text
                        className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[8%]"
                        compId="1074:1721"
                        comWidth={40}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Blog`}</Text>
                      <Text
                        className="cursor-pointer hover:font-normal font-normal font-nunitosans my-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[13%]"
                        compId="1074:1722"
                        comWidth={63}
                        comHeight={25}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Contact`}</Text>
                    </Row>
                    <Row
                      className="bg-bluegray_100_3f items-center justify-between 3xl:ml-[108px] ml-[120px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius8 w-[48%]"
                      compId="1092"
                      comWidth={544}
                      comHeight={48}
                      compLeft={120}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-normal mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[20%]"
                        compId="1074:1725"
                        comWidth={109}
                        comHeight={27}
                        compLeft={32}
                        compRight={0}
                        compType="Text"
                      >{`Search here`}</Text>
                      <Image
                        src={"images/img_search_1.svg"}
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        compId="1074:1726"
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
          </Column>
          <Row
            className="items-center justify-start lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] xl:mx-[106px] 2xl:mx-[120px] 3xl:mx-[144px] mx-[160px] lg:mx-[93px] w-[7%]"
            compId="1074:1678"
            comWidth={137}
            comHeight={27}
            compLeft={160}
            compRight={160}
            compType="Row"
          >
            <Text
              className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[39%]"
              compId="1074:1679"
              comWidth={54}
              comHeight={27}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Home`}</Text>
            <Text
              className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[8%]"
              compId="1074:1680"
              comWidth={11}
              comHeight={27}
              compLeft={16}
              compRight={0}
              compType="Text"
            >{`>`}</Text>
            <Text
              className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[29%]"
              compId="1074:1681"
              comWidth={40}
              comHeight={27}
              compLeft={16}
              compRight={0}
              compType="Text"
            >{`Blog`}</Text>
          </Row>
          <Column
            className="lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] w-[100%]"
            compId="1123"
            comWidth={1920}
            comHeight={2594}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-start w-[100%]"
              compId="1109"
              comWidth={1920}
              comHeight={1604}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start lg:mb-[148px] xl:mb-[169px] 2xl:mb-[190px] 3xl:mb-[228px] mb-[254px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:mt-[132px] xl:mt-[151px] 2xl:mt-[170px] 3xl:mt-[204px] mt-[227px] w-[20%]"
                compId="1108"
                comWidth={376}
                comHeight={1123}
                compLeft={160}
                compRight={0}
                compType="Column"
              >
                <div className="bg-transparent border-0 w-[100%] input-wrap">
                  <Image
                    src={"images/img_xmlid_223.svg"}
                    className="absolute h-[18px] left-[19px] bg-transparent border-0 lg:h-[11px] lg:left-[11px] xl:h-[13px] xl:left-[12px] 2xl:h-[14px] 2xl:left-[14px] 3xl:h-[17px] 3xl:left-[17px] my-[auto] inset-y-[0]"
                    compId="831:263"
                    comWidth={18}
                    comHeight={18}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="XMLID 223"
                  />
                  <Input
                    className="placeholder:bg-transparent bg-transparent border border-bluegray_100 border-solid font-normal not-italic lg:pl-[32px] xl:pl-[37px] 2xl:pl-[42px] 3xl:pl-[50px] pl-[56px] lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.545px] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    compId="231"
                    comWidth={0}
                    comHeight={50}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group231"
                    placeholder={`Search...`}
                  ></Input>
                </div>
                <Column
                  className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="1124"
                  comWidth={376}
                  comHeight={574}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="border border-bluegray_100 border-solid items-start justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius16 w-[100%]"
                    compId="831:270"
                    comWidth={376}
                    comHeight={309}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[27%]"
                      compId="831:269"
                      comWidth={103}
                      comHeight={27}
                      compLeft={32}
                      compRight={32}
                      compType="Text"
                    >{`Categories`}</Text>
                    <Row
                      className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[36%]"
                      compId="831:271"
                      comWidth={135}
                      comHeight={27}
                      compLeft={32}
                      compRight={32}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_bxbxchevronr.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="831:273"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="bxbxchevronr"
                      />
                      <Text
                        className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[78%]"
                        compId="831:272"
                        comWidth={105}
                        comHeight={27}
                        compLeft={6}
                        compRight={0}
                        compType="Text"
                      >{`Technology`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[19%]"
                      compId="861:100"
                      comWidth={70}
                      comHeight={27}
                      compLeft={32}
                      compRight={32}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_bxbxchevronr.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="861:101"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="bxbxchevronr"
                      />
                      <Text
                        className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[57%]"
                        compId="861:103"
                        comWidth={40}
                        comHeight={27}
                        compLeft={6}
                        compRight={0}
                        compType="Text"
                      >{`Blog`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[26%]"
                      compId="861:104"
                      comWidth={99}
                      comHeight={27}
                      compLeft={32}
                      compRight={32}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_bxbxchevronr.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="861:105"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="bxbxchevronr"
                      />
                      <Text
                        className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[70%]"
                        compId="861:107"
                        comWidth={69}
                        comHeight={27}
                        compLeft={6}
                        compRight={0}
                        compType="Text"
                      >{`Gadget`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[27%]"
                      compId="861:108"
                      comWidth={103}
                      comHeight={27}
                      compLeft={32}
                      compRight={32}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_bxbxchevronr.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="861:109"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="bxbxchevronr"
                      />
                      <Text
                        className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[71%]"
                        compId="861:111"
                        comWidth={73}
                        comHeight={27}
                        compLeft={6}
                        compRight={0}
                        compType="Text"
                      >{`Gaming`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[27%]"
                      compId="861:112"
                      comWidth={102}
                      comHeight={27}
                      compLeft={32}
                      compRight={32}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_bxbxchevronr.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="861:113"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="bxbxchevronr"
                      />
                      <Text
                        className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[71%]"
                        compId="861:115"
                        comWidth={72}
                        comHeight={27}
                        compLeft={6}
                        compRight={0}
                        compType="Text"
                      >{`Reviews`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[21%]"
                      compId="861:116"
                      comWidth={78}
                      comHeight={27}
                      compLeft={32}
                      compRight={32}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_bxbxchevronr.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="861:117"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="bxbxchevronr"
                      />
                      <Text
                        className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[62%]"
                        compId="861:119"
                        comWidth={48}
                        comHeight={27}
                        compLeft={6}
                        compRight={0}
                        compType="Text"
                      >{`News`}</Text>
                    </Row>
                  </Column>
                  <Column
                    className="border border-bluegray_100 border-solid items-start justify-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius16 w-[100%]"
                    compId="1104"
                    comWidth={376}
                    comHeight={233}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[12%]"
                      compId="861:125"
                      comWidth={46}
                      comHeight={27}
                      compLeft={32}
                      compRight={32}
                      compType="Text"
                    >{`Tags`}</Text>
                    <Column
                      className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                      compId="1126"
                      comWidth={376}
                      comHeight={126}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="items-start justify-start mx-[auto] rounded-radius16 w-[81%]"
                        compId="1103"
                        comWidth={305}
                        comHeight={126}
                        compLeft={10}
                        compRight={10}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] w-[76%]"
                          compId="861:154"
                          comWidth={232}
                          comHeight={59}
                          compLeft={0}
                          compRight={10}
                          compType="Row"
                        >
                          <Button
                            className="border border-gray_500 border-solid font-normal not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.545px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[29%]"
                            compId="218"
                            comWidth={68}
                            comHeight={59}
                            compLeft={0}
                            compRight={0}
                            compType="Button"
                          >{`Tips`}</Button>
                          <Button
                            className="border border-gray_500 border-solid font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.545px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[33%]"
                            compId="217"
                            comWidth={76}
                            comHeight={59}
                            compLeft={8}
                            compRight={0}
                            compType="Button"
                          >{`Tech`}</Button>
                          <Button
                            className="border border-gray_500 border-solid font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.545px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[31%]"
                            compId="216"
                            comWidth={72}
                            comHeight={59}
                            compLeft={8}
                            compRight={0}
                            compType="Button"
                          >{`Blog`}</Button>
                        </Row>
                        <Column
                          className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                          compId="1127"
                          comWidth={305}
                          comHeight={59}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Row
                            className="items-center justify-between w-[100%]"
                            compId="861:153"
                            comWidth={305}
                            comHeight={59}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Button
                              className="border border-gray_500 border-solid font-normal not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.545px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[26%]"
                              compId="221"
                              comWidth={80}
                              comHeight={59}
                              compLeft={0}
                              compRight={0}
                              compType="Button"
                            >{`News`}</Button>
                            <Button
                              className="border border-gray_500 border-solid font-normal not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.545px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[34%]"
                              compId="220"
                              comWidth={105}
                              comHeight={59}
                              compLeft={0}
                              compRight={0}
                              compType="Button"
                            >{`Gaming`}</Button>
                            <Button
                              className="border border-gray_500 border-solid font-normal not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.545px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[34%]"
                              compId="219"
                              comWidth={104}
                              comHeight={59}
                              compLeft={0}
                              compRight={0}
                              compType="Button"
                            >{`Reviews`}</Button>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[29%]"
                  compId="1074:1791"
                  comWidth={109}
                  comHeight={27}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Recent Post`}</Text>
                <Column
                  className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="1125"
                  comWidth={376}
                  comHeight={344}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    compId="1119"
                    comWidth={376}
                    comHeight={344}
                    compLeft={0}
                    compRight={0}
                    compType="List"
                    orientation="vertical"
                  >
                    <Row
                      className="items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]"
                      compId="1074:1808"
                      comWidth={376}
                      comHeight={104}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <div
                        className="bg-gray_400 h-[104px] lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius8 w-[104px] lg:w-[60px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                        compId="1074:1783"
                        comWidth={104}
                        comHeight={104}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Column
                        className="items-start lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] mb-[3px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] xl:my-[2px] w-[64%]"
                        compId="1074:1807"
                        comWidth={240}
                        comHeight={97}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold leading-lh lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                          compId="1074:1786"
                          comWidth={240}
                          comHeight={54}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur.`}</Text>
                        <Text
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[78%]"
                          compId="1074:1788"
                          comWidth={186}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >
                          <span className="text-deep_orange_400 font-poppins">
                            <>{`Admin`}</>
                          </span>
                          <span className="text-gray_800 font-poppins">
                            <>{` - 12 June 2021`}</>
                          </span>
                        </Text>
                      </Column>
                    </Row>
                    <Row
                      className="items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]"
                      compId="1074:1809"
                      comWidth={376}
                      comHeight={104}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <div
                        className="bg-gray_400 h-[104px] lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius8 w-[104px] lg:w-[60px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                        compId="1074:1812"
                        comWidth={104}
                        comHeight={104}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Column
                        className="items-start lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] mb-[3px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] xl:my-[2px] w-[64%]"
                        compId="1074:1813"
                        comWidth={240}
                        comHeight={97}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold leading-lh lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                          compId="1074:1814"
                          comWidth={240}
                          comHeight={54}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur.`}</Text>
                        <Text
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[78%]"
                          compId="1074:1815"
                          comWidth={186}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >
                          <span className="text-deep_orange_400 font-poppins">
                            <>{`Admin`}</>
                          </span>
                          <span className="text-gray_800 font-poppins">
                            <>{` - 12 June 2021`}</>
                          </span>
                        </Text>
                      </Column>
                    </Row>
                    <Row
                      className="items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]"
                      compId="1074:1816"
                      comWidth={376}
                      comHeight={104}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <div
                        className="bg-gray_400 h-[104px] lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius8 w-[104px] lg:w-[60px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                        compId="1074:1819"
                        comWidth={104}
                        comHeight={104}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Column
                        className="items-start lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] mb-[3px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] xl:my-[2px] w-[64%]"
                        compId="1074:1820"
                        comWidth={240}
                        comHeight={97}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold leading-lh lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                          compId="1074:1821"
                          comWidth={240}
                          comHeight={54}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur.`}</Text>
                        <Text
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[78%]"
                          compId="1074:1822"
                          comWidth={186}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >
                          <span className="text-deep_orange_400 font-poppins">
                            <>{`Admin`}</>
                          </span>
                          <span className="text-gray_800 font-poppins">
                            <>{` - 12 June 2021`}</>
                          </span>
                        </Text>
                      </Column>
                    </Row>
                  </List>
                </Column>
              </Column>
              <Column
                className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[62%]"
                compId="1074:1675"
                comWidth={1192}
                comHeight={1604}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-start w-[100%]"
                  compId="1128"
                  comWidth={1192}
                  comHeight={147}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold font-montserrat lg:mx-[145px] xl:mx-[166px] 2xl:mx-[186px] 3xl:mx-[224px] mx-[249px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[24%]"
                    compId="1074:1676"
                    comWidth={286}
                    comHeight={59}
                    compLeft={249}
                    compRight={249}
                    compType="Text"
                  >{`Latest Blog`}</Text>
                  <Text
                    className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:mx-[45px] xl:mx-[52px] 2xl:mx-[58px] 3xl:mx-[70px] mx-[78px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[53%]"
                    compId="1074:1677"
                    comWidth={627.6}
                    comHeight={64}
                    compLeft={78}
                    compRight={78}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`}</Text>
                </Column>
                <Grid
                  className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
                  compId="1118"
                  comWidth={1192}
                  comHeight={1246}
                  compLeft={0}
                  compRight={0}
                  compType="Grid"
                >
                  <Column
                    className="shadow-bs w-[100%]"
                    compId="831:180"
                    comWidth={376}
                    comHeight={607}
                    compLeft={0}
                    compRight={816}
                    compType="Column"
                  >
                    <div
                      className="bg-gray_400 lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]"
                      compId="861:53"
                      comWidth={376}
                      comHeight={318}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Column
                      className="bg-gray_50 items-start justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                      compId="831:185"
                      comWidth={376}
                      comHeight={289}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold leading-lh lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[83%]"
                        compId="831:186"
                        comWidth={312}
                        comHeight={54}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >{`6 Best Smartphone for e-Sport  Pro Player`}</Text>
                      <Text
                        className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[83%]"
                        compId="861:4"
                        comWidth={312}
                        comHeight={96}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...`}</Text>
                      <Text
                        className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[49%]"
                        compId="861:2"
                        comWidth={186}
                        comHeight={27}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >
                        <span className="text-deep_orange_400 font-poppins">
                          <>{`Admin`}</>
                        </span>
                        <span className="text-gray_800 font-poppins">
                          <>{` - 12 June 2021`}</>
                        </span>
                      </Text>
                    </Column>
                  </Column>
                  <Column
                    className="shadow-bs w-[100%]"
                    compId="1074:1734"
                    comWidth={376}
                    comHeight={607}
                    compLeft={408}
                    compRight={408}
                    compType="Column"
                  >
                    <div
                      className="bg-gray_400 lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]"
                      compId="1074:1737"
                      comWidth={376}
                      comHeight={318}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Column
                      className="bg-gray_50 items-start justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                      compId="1074:1739"
                      comWidth={376}
                      comHeight={289}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold leading-lh lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mr-[14px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] mr-[24px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[85%]"
                        compId="1074:1740"
                        comWidth={320}
                        comHeight={54}
                        compLeft={32}
                        compRight={24}
                        compType="Text"
                      >{`Keep Your Guard Ups, What the Best Solution to Your Surveillance?`}</Text>
                      <Text
                        className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[83%]"
                        compId="1074:1741"
                        comWidth={312}
                        comHeight={96}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...`}</Text>
                      <Text
                        className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[49%]"
                        compId="1074:1742"
                        comWidth={186}
                        comHeight={27}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >
                        <span className="text-deep_orange_400 font-poppins">
                          <>{`Admin`}</>
                        </span>
                        <span className="text-gray_800 font-poppins">
                          <>{` - 12 June 2021`}</>
                        </span>
                      </Text>
                    </Column>
                  </Column>
                  <Column
                    className="shadow-bs w-[100%]"
                    compId="1074:1743"
                    comWidth={376}
                    comHeight={607}
                    compLeft={816}
                    compRight={0}
                    compType="Column"
                  >
                    <div
                      className="bg-gray_400 lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]"
                      compId="1074:1746"
                      comWidth={376}
                      comHeight={318}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Column
                      className="bg-gray_50 items-start justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                      compId="1074:1748"
                      comWidth={376}
                      comHeight={289}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold leading-lh lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[83%]"
                        compId="1074:1749"
                        comWidth={312}
                        comHeight={54}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >{`5 Latest Invention that Provide Life Convenience`}</Text>
                      <Text
                        className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[83%]"
                        compId="1074:1750"
                        comWidth={312}
                        comHeight={96}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...`}</Text>
                      <Text
                        className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[49%]"
                        compId="1074:1751"
                        comWidth={186}
                        comHeight={27}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >
                        <span className="text-deep_orange_400 font-poppins">
                          <>{`Admin`}</>
                        </span>
                        <span className="text-gray_800 font-poppins">
                          <>{` - 12 June 2021`}</>
                        </span>
                      </Text>
                    </Column>
                  </Column>
                  <Column
                    className="shadow-bs w-[100%]"
                    compId="1074:1752"
                    comWidth={376}
                    comHeight={607}
                    compLeft={0}
                    compRight={816}
                    compType="Column"
                  >
                    <div
                      className="bg-gray_400 lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]"
                      compId="1074:1755"
                      comWidth={376}
                      comHeight={318}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Column
                      className="bg-gray_50 items-start justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                      compId="1074:1757"
                      comWidth={376}
                      comHeight={289}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold leading-lh lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[83%]"
                        compId="1074:1758"
                        comWidth={312}
                        comHeight={54}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >{`6 Best Smartphone for e-Sport  Pro Player`}</Text>
                      <Text
                        className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[83%]"
                        compId="1074:1759"
                        comWidth={312}
                        comHeight={96}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...`}</Text>
                      <Text
                        className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[49%]"
                        compId="1074:1760"
                        comWidth={186}
                        comHeight={27}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >
                        <span className="text-deep_orange_400 font-poppins">
                          <>{`Admin`}</>
                        </span>
                        <span className="text-gray_800 font-poppins">
                          <>{` - 12 June 2021`}</>
                        </span>
                      </Text>
                    </Column>
                  </Column>
                  <Column
                    className="shadow-bs w-[100%]"
                    compId="1074:1761"
                    comWidth={376}
                    comHeight={607}
                    compLeft={408}
                    compRight={408}
                    compType="Column"
                  >
                    <div
                      className="bg-gray_400 lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]"
                      compId="1074:1764"
                      comWidth={376}
                      comHeight={318}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Column
                      className="bg-gray_50 items-start justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                      compId="1074:1766"
                      comWidth={376}
                      comHeight={289}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold leading-lh lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mr-[14px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] mr-[24px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[85%]"
                        compId="1074:1767"
                        comWidth={320}
                        comHeight={54}
                        compLeft={32}
                        compRight={24}
                        compType="Text"
                      >{`Keep Your Guard Ups, What the Best Solution to Your Surveillance?`}</Text>
                      <Text
                        className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[83%]"
                        compId="1074:1768"
                        comWidth={312}
                        comHeight={96}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...`}</Text>
                      <Text
                        className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[49%]"
                        compId="1074:1769"
                        comWidth={186}
                        comHeight={27}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >
                        <span className="text-deep_orange_400 font-poppins">
                          <>{`Admin`}</>
                        </span>
                        <span className="text-gray_800 font-poppins">
                          <>{` - 12 June 2021`}</>
                        </span>
                      </Text>
                    </Column>
                  </Column>
                  <Column
                    className="shadow-bs w-[100%]"
                    compId="1074:1770"
                    comWidth={376}
                    comHeight={607}
                    compLeft={816}
                    compRight={0}
                    compType="Column"
                  >
                    <div
                      className="bg-gray_400 lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]"
                      compId="1074:1773"
                      comWidth={376}
                      comHeight={318}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Column
                      className="bg-gray_50 items-start justify-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                      compId="1074:1775"
                      comWidth={376}
                      comHeight={289}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold leading-lh lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[83%]"
                        compId="1074:1776"
                        comWidth={312}
                        comHeight={54}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >{`5 Latest Invention that Provide Life Convenience`}</Text>
                      <Text
                        className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[83%]"
                        compId="1074:1777"
                        comWidth={312}
                        comHeight={96}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...`}</Text>
                      <Text
                        className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[49%]"
                        compId="1074:1778"
                        comWidth={186}
                        comHeight={27}
                        compLeft={32}
                        compRight={32}
                        compType="Text"
                      >
                        <span className="text-deep_orange_400 font-poppins">
                          <>{`Admin`}</>
                        </span>
                        <span className="text-gray_800 font-poppins">
                          <>{` - 12 June 2021`}</>
                        </span>
                      </Text>
                    </Column>
                  </Column>
                </Grid>
                <Row
                  className="items-center justify-center lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] mx-[auto] rounded-radius8 w-[25%]"
                  compId="1096"
                  comWidth={296}
                  comHeight={51}
                  compLeft={448}
                  compRight={448}
                  compType="Row"
                >
                  <Image
                    src={"images/img_chevrondown_1.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] 2xl:my-[10px] 3xl:my-[12px] my-[13.5px] lg:my-[7px] xl:my-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="856:1054"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="chevrondown"
                  />
                  <Text
                    className="bg-deep_orange_400 font-normal lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] leading-lh lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[1px] not-italic 3xl:pb-[10px] pb-[12px] lg:pb-[7px] xl:pb-[8px] 2xl:pb-[9px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] pl-[22px] pt-[11px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px] w-[50px]"
                    compId="856:1056"
                    comWidth={50}
                    comHeight={50}
                    compLeft={24}
                    compRight={0}
                    compType="Text"
                  >{`1`}</Text>
                  <Text
                    className="border-2 border-gray_500 border-solid font-normal lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] leading-lh lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] pl-[20px] 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]"
                    compId="856:1059"
                    comWidth={51}
                    comHeight={51}
                    compLeft={24}
                    compRight={0}
                    compType="Text"
                  >{`2`}</Text>
                  <Text
                    className="border-2 border-gray_500 border-solid font-normal lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] leading-lh lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] pl-[20px] 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]"
                    compId="856:1062"
                    comWidth={51}
                    comHeight={51}
                    compLeft={24}
                    compRight={0}
                    compType="Text"
                  >{`3`}</Text>
                  <Image
                    src={"images/img_chevrondown_2.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 2xl:my-[10px] 3xl:my-[12px] my-[13.5px] lg:my-[7px] xl:my-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="856:1065"
                    comWidth={24}
                    comHeight={24}
                    compLeft={24}
                    compRight={0}
                    compType="Image"
                    alt="chevrondown"
                  />
                </Row>
              </Column>
            </Row>
            <Row
              className="bg-deep_orange_400 items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
              compId="1097"
              comWidth={1920}
              comHeight={245}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_newsletter_3.svg"}
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] xl:mb-[49px] 2xl:mb-[55px] 3xl:mb-[66px] mb-[74px] lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] ml-[256px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] mt-[75px] lg:my-[43px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                compId="1074:1826"
                comWidth={96}
                comHeight={96}
                compLeft={256}
                compRight={0}
                compType="Image"
                alt="Newsletter"
              />
              <Column
                className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[40px] xl:my-[46px] 2xl:my-[51px] 3xl:my-[62px] my-[69px] w-[33%]"
                compId="1074:1834"
                comWidth={637}
                comHeight={107}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold font-montserrat lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[100%]"
                  compId="1074:1835"
                  comWidth={637}
                  comHeight={59}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Join our newsletter now!`}</Text>
                <Text
                  className="font-normal font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[75%]"
                  compId="1074:1836"
                  comWidth={480}
                  comHeight={32}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Register now and get our latest updates and promos.`}</Text>
              </Column>
              <Stack
                className="lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] h-[76px] 3xl:mb-[75px] mb-[84px] 3xl:ml-[105px] ml-[117px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] 3xl:mt-[76px] mt-[85px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] w-[27%]"
                compId="1117"
                comWidth={526}
                comHeight={76}
                compLeft={117}
                compRight={0}
                compType="Stack"
              >
                <Input
                  className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[15px] pb-[26.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pt-[14px] pt-[25.545px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500 text-gray_500 text-left tracking-ls1 w-[100%]"
                  compId="232"
                  comWidth={526}
                  comHeight={76}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Group232"
                  placeholder={`Enter your email`}
                ></Input>
                <Button
                  className="absolute bg-gray_800 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[2%] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
                  compId="228"
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
              compId="1074:1837"
              comWidth={1920}
              comHeight={585}
              compLeft={0}
              compRight={0}
              compType="Footer"
            >
              <Column
                className="bg-deep_orange_400_cf items-center justify-end w-[100%]"
                compId="1101"
                comWidth={1920}
                comHeight={585}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-start justify-start lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
                  compId="1098"
                  comWidth={1920}
                  comHeight={260}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start justify-start 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] w-[20%]"
                    compId="1100"
                    comWidth={381}
                    comHeight={246}
                    compLeft={160}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[29%]"
                      compId="1074:1848"
                      comWidth={112}
                      comHeight={54}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Tronix`}</Text>
                    <Text
                      className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                      compId="1074:1849"
                      comWidth={381}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                      compId="1074:1884"
                      comWidth={243}
                      comHeight={32}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_call_8.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1074:1885"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Call"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                        compId="1074:1887"
                        comWidth={211}
                        comHeight={32}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >{`+1234567890`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[64%]"
                      compId="1074:1888"
                      comWidth={243}
                      comHeight={32}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_email_2.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1074:1889"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Email"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                        compId="1074:1891"
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
                    compId="1074:1850"
                    comWidth={120}
                    comHeight={260}
                    compLeft={435}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1074:1851"
                      comWidth={120}
                      comHeight={29}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Company`}</Text>
                    <Column
                      className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[67%]"
                      compId="1074:1852"
                      comWidth={80}
                      comHeight={199}
                      compLeft={0}
                      compRight={10}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[68%]"
                        compId="1074:1853"
                        comWidth={54}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`About`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                        compId="1074:1854"
                        comWidth={80}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Products`}</Text>
                      <Text
                        className="font-normal lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] mr-[6px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[93%]"
                        compId="1074:1855"
                        comWidth={74}
                        comHeight={27}
                        compLeft={0}
                        compRight={6}
                        compType="Text"
                      >{`Contact`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[50%]"
                        compId="1074:1856"
                        comWidth={40}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Blog`}</Text>
                      <Text
                        className="font-normal lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[90%]"
                        compId="1074:1857"
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
                    compId="1074:1858"
                    comWidth={164}
                    comHeight={217}
                    compLeft={152}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[91%]"
                      compId="1074:1859"
                      comWidth={150}
                      comHeight={29}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Information`}</Text>
                    <Column
                      className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                      compId="1129"
                      comWidth={164}
                      comHeight={156}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="items-start justify-start w-[100%]"
                        compId="1074:1860"
                        comWidth={164}
                        comHeight={156}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[65%]"
                          compId="1074:1861"
                          comWidth={107}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Help Center`}</Text>
                        <Text
                          className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                          compId="1074:1862"
                          comWidth={164}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Payment Methods`}</Text>
                        <Text
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[88%]"
                          compId="1074:1863"
                          comWidth={145}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Return & Refund`}</Text>
                        <Text
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[74%]"
                          compId="1074:1864"
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
                    compId="1074:1865"
                    comWidth={216}
                    comHeight={117}
                    compLeft={108}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[56%]"
                      compId="1074:1866"
                      comWidth={122}
                      comHeight={29}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Follow Us`}</Text>
                    <Column
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                      compId="1130"
                      comWidth={216}
                      comHeight={56}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Image
                        src={"images/img_sosmedia_9.svg"}
                        className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-cover w-[100%]"
                        compId="1074:1867"
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
                  compId="1074:1892"
                  comWidth={1600}
                  comHeight={1}
                  compLeft={10}
                  compRight={10}
                  compType="Line"
                />
                <Row
                  className="items-center justify-between lg:mb-[31px] xl:mb-[36px] 2xl:mb-[40px] 3xl:mb-[48px] mb-[54px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] w-[100%]"
                  compId="1099"
                  comWidth={1920}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_800 text-left w-[15%]"
                    compId="1074:1846"
                    comWidth={287}
                    comHeight={21}
                    compLeft={160}
                    compRight={0}
                    compType="Text"
                  >{`Copyright © 2021 Tronix. All Right Reseved`}</Text>
                  <Image
                    src={"images/img_payment.svg"}
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] mr-[160px] lg:mr-[93px] object-contain w-[7%]"
                    compId="1074:1839"
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
      </Column>
    </>
  );
};

export default BlogListPage;
