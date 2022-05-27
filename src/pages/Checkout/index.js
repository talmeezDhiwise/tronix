import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { Line } from "components/Line";
import { Grid } from "components/Grid";
import { Input } from "components/Input";
import { List } from "components/List";
import { Button } from "components/Button";

const CheckoutPage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins mx-[auto] w-[100%]"
        compId="337:381"
        comWidth={1920}
        comHeight={2398}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="items-start justify-start w-[100%]"
          compId="1263"
          comWidth={1920}
          comHeight={2398}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Column
            className="w-[100%]"
            compId="1276"
            comWidth={1920}
            comHeight={120}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <header
              className="w-[100%]"
              compId="270"
              comWidth={1920}
              comHeight={120}
              compLeft={0}
              compRight={0}
              compType="Header"
            >
              <Row
                className="items-center justify-start rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[100%]"
                compId="1244"
                comWidth={1920}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-semibold xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:my-[19px] xl:my-[22px] 2xl:my-[24px] 3xl:my-[29px] my-[33px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[6%]"
                  compId="1057:551"
                  comWidth={112}
                  comHeight={54}
                  compLeft={160}
                  compRight={0}
                  compType="Text"
                >{`Tronix`}</Text>
                <Row
                  className="bg-bluegray_100_3f items-center justify-center 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] my-[36px] rounded-radius8 w-[28%]"
                  compId="1242"
                  comWidth={544}
                  comHeight={48}
                  compLeft={128}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[20%]"
                    compId="1057:554"
                    comWidth={109}
                    comHeight={27}
                    compLeft={32}
                    compRight={0}
                    compType="Text"
                  >{`Search here`}</Text>
                  <Image
                    src={"images/img_search_1.svg"}
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[207px] xl:ml-[236px] 2xl:ml-[266px] 3xl:ml-[319px] ml-[355px] object-contain rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                    compId="1057:555"
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
                  compId="1275"
                  comWidth={473}
                  comHeight={27}
                  compLeft={103}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                    compId="1057:571"
                    comWidth={54}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Home`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                    compId="1057:572"
                    comWidth={54}
                    comHeight={27}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[15%]"
                    compId="1057:573"
                    comWidth={70}
                    comHeight={27}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`Product`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[8%]"
                    compId="1057:574"
                    comWidth={40}
                    comHeight={27}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`Blog`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-nunitosans lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] my-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[13%]"
                    compId="1057:575"
                    comWidth={63}
                    comHeight={25}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`Contact`}</Text>
                </Row>
                <Row
                  className="items-end justify-center lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] mb-[44px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[8%]"
                  compId="1240"
                  comWidth={160}
                  comHeight={44}
                  compLeft={80}
                  compRight={0}
                  compType="Row"
                >
                  <Stack
                    className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] h-[44px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px] w-[44px]"
                    compId="1270"
                    comWidth={44}
                    comHeight={44}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_shoppingbag_6.svg"}
                      className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] left-[0] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      compId="1057:562"
                      comWidth={32}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="ShoppingBag"
                    />
                    <Column
                      className="absolute bg-deep_orange_400 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] items-center justify-start lg:py-[1px] 3xl:py-[2px] 2xl:py-[2px] xl:py-[2px] py-[3px] right-[0] rounded-radius50 top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="267"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mx-[auto] not-italic 3xl:text-fs10 text-fs12 lg:text-fs7 xl:text-fs8 2xl:text-fs9 text-gray_50 text-left w-[67%]"
                        compId="1057:569"
                        comWidth={16}
                        comHeight={18}
                        compLeft={4}
                        compRight={4}
                        compType="Text"
                      >{`99`}</Text>
                    </Column>
                  </Stack>
                  <Image
                    src={"images/img_email_9.svg"}
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                    compId="1057:564"
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
                    compId="1057:566"
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
            className="items-center justify-start lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] xl:mx-[106px] 2xl:mx-[120px] 3xl:mx-[144px] mx-[160px] lg:mx-[93px] w-[16%]"
            compId="1057:576"
            comWidth={299}
            comHeight={27}
            compLeft={160}
            compRight={160}
            compType="Row"
          >
            <Text
              className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[18%]"
              compId="337:384"
              comWidth={54}
              comHeight={27}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Home`}</Text>
            <Text
              className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[4%]"
              compId="337:387"
              comWidth={11}
              comHeight={27}
              compLeft={16}
              compRight={0}
              compType="Text"
            >{`>`}</Text>
            <Text
              className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[24%]"
              compId="337:385"
              comWidth={71}
              comHeight={27}
              compLeft={16}
              compRight={0}
              compType="Text"
            >{`My Cart`}</Text>
            <Text
              className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[4%]"
              compId="337:388"
              comWidth={11}
              comHeight={27}
              compLeft={16}
              compRight={0}
              compType="Text"
            >{`>`}</Text>
            <Text
              className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[29%]"
              compId="337:386"
              comWidth={88}
              comHeight={27}
              compLeft={16}
              compRight={0}
              compType="Text"
            >{`Checkout`}</Text>
          </Row>
          <Column
            className="font-montserrat items-center lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] w-[100%]"
            compId="1277"
            comWidth={1920}
            comHeight={2198}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold mx-[auto] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[13%]"
              compId="337:382"
              comWidth={243}
              comHeight={59}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`Checkout`}</Text>
            <Row
              className="font-poppins items-center justify-center lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] mt-[72px] mx-[auto] w-[42%]"
              compId="1057:577"
              comWidth={804}
              comHeight={56}
              compLeft={10}
              compRight={10}
              compType="Row"
            >
              <Row
                className="items-center justify-start w-[22%]"
                compId="1057:578"
                comWidth={175}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="border-2 border-deep_orange_400 border-solid lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] items-center py-[10px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                  compId="268"
                  comWidth={56}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium mx-[auto] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[16%]"
                    compId="1057:581"
                    comWidth={9}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`1`}</Text>
                </Column>
                <Text
                  className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[54%]"
                  compId="1057:579"
                  comWidth={95}
                  comHeight={36}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >{`My Cart`}</Text>
              </Row>
              <Line
                className="bg-gray_800 h-[2px] lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:my-[15px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[24px] my-[27px] w-[38%]"
                compId="1057:582"
                comWidth={304}
                comHeight={2}
                compLeft={64}
                compRight={0}
                compType="Line"
              />
              <Row
                className="items-center justify-start lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] w-[25%]"
                compId="1057:583"
                comWidth={197}
                comHeight={56}
                compLeft={64}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="border-2 border-deep_orange_400 border-solid lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] items-center py-[10px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                  compId="269"
                  comWidth={56}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium mx-[auto] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[25%]"
                    compId="1057:586"
                    comWidth={14}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`2`}</Text>
                </Column>
                <Text
                  className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[59%]"
                  compId="1057:584"
                  comWidth={117}
                  comHeight={36}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >{`Checkout`}</Text>
              </Row>
            </Row>
            <Row
              className="font-poppins items-start justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
              compId="1258"
              comWidth={1920}
              comHeight={941}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start 2xl:mb-[110px] 3xl:mb-[132px] mb-[147px] lg:mb-[85px] xl:mb-[98px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] w-[55%]"
                compId="1252"
                comWidth={1056}
                comHeight={794}
                compLeft={160}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[9%]"
                  compId="337:391"
                  comWidth={91}
                  comHeight={27}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Buyer Info`}</Text>
                <Column
                  className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="1278"
                  comWidth={1056}
                  comHeight={735}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Line
                    className="bg-gray_800 h-[1px] opacity-op5 w-[100%]"
                    compId="337:392"
                    comWidth={1056}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Grid
                    className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[100%]"
                    compId="1273"
                    comWidth={1056}
                    comHeight={373}
                    compLeft={0}
                    compRight={0}
                    compType="Grid"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="274"
                      comWidth={512}
                      comHeight={103}
                      compLeft={0}
                      compRight={544}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[19%]"
                        compId="337:395"
                        comWidth={96}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`First Name`}</Text>
                      <Input
                        className="placeholder:bg-transparent bg-transparent border border-gray_800 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius8 placeholder:text-gray_800 w-[100%]"
                        compId="273"
                        comWidth={512}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="EditText"
                        name="Group273"
                        placeholder={`First Name`}
                      ></Input>
                    </Column>
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="276"
                      comWidth={512}
                      comHeight={103}
                      compLeft={544}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[19%]"
                        compId="659:96"
                        comWidth={96}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Last Name`}</Text>
                      <Input
                        className="placeholder:bg-transparent bg-transparent border border-gray_800 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius8 placeholder:text-gray_800 w-[100%]"
                        compId="275"
                        comWidth={512}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="EditText"
                        name="Group275"
                        placeholder={`Last Name`}
                      ></Input>
                    </Column>
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="278"
                      comWidth={512}
                      comHeight={103}
                      compLeft={0}
                      compRight={544}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[14%]"
                        compId="337:398"
                        comWidth={74}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Address`}</Text>
                      <Input
                        className="placeholder:bg-transparent bg-transparent border border-gray_800 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius8 placeholder:text-gray_800 w-[100%]"
                        compId="277"
                        comWidth={512}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="EditText"
                        name="Group277"
                        placeholder={`Address`}
                      ></Input>
                    </Column>
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="280"
                      comWidth={512}
                      comHeight={103}
                      compLeft={544}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[14%]"
                        compId="337:401"
                        comWidth={74}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Contact`}</Text>
                      <Input
                        className="placeholder:bg-transparent bg-transparent border border-gray_800 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius8 placeholder:text-gray_800 w-[100%]"
                        compId="279"
                        comWidth={512}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="EditText"
                        name="Group279"
                        placeholder={`Contact`}
                      ></Input>
                    </Column>
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="282"
                      comWidth={512}
                      comHeight={103}
                      compLeft={0}
                      compRight={544}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[14%]"
                        compId="337:404"
                        comWidth={72}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Country`}</Text>
                      <Input
                        className="placeholder:bg-transparent bg-transparent border border-gray_800 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius8 placeholder:text-gray_800 w-[100%]"
                        compId="281"
                        comWidth={512}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="EditText"
                        name="Group281"
                        placeholder={`Country`}
                      ></Input>
                    </Column>
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="284"
                      comWidth={512}
                      comHeight={103}
                      compLeft={544}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[7%]"
                        compId="659:105"
                        comWidth={36}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`City`}</Text>
                      <Input
                        className="placeholder:bg-transparent bg-transparent border border-gray_800 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius8 placeholder:text-gray_800 w-[100%]"
                        compId="283"
                        comWidth={512}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="EditText"
                        name="Group283"
                        placeholder={`City`}
                      ></Input>
                    </Column>
                  </Grid>
                  <Row
                    className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="1248"
                    comWidth={1056}
                    comHeight={103}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="items-start w-[100%]"
                      compId="337:405"
                      comWidth={512}
                      comHeight={103}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[9%]"
                        compId="337:411"
                        comWidth={48}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`State`}</Text>
                      <div className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border-0 lg:mt-[9px] mt-[16px] w-[100%] xl:mt-[10px] input-wrap">
                        <Image
                          src={"images/img_vector.svg"}
                          className="absolute right-[28.059998px] bg-transparent border-0 lg:right-[16px] xl:right-[18px] 2xl:right-[21px] 3xl:right-[25px] my-[auto] inset-y-[0]"
                          compId="337:409"
                          comWidth={9.94}
                          comHeight={6}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Vector"
                        />
                        <Input
                          className="placeholder:bg-transparent bg-transparent border border-gray_800 border-solid font-normal not-italic xl:pb-[12px] 3xl:pb-[16px] pb-[18.545px] lg:pl-[19px] xl:pl-[22px] 2xl:pl-[24px] 3xl:pl-[29px] pl-[33px] lg:pr-[44px] xl:pr-[50px] 2xl:pr-[57px] 3xl:pr-[68px] pr-[75.999998px] xl:pt-[11px] 3xl:pt-[15px] pt-[17.545px] lg:py-[10px] 2xl:py-[13px] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_800 text-gray_800 text-left w-[100%]"
                          compId="271"
                          comWidth={0}
                          comHeight={60}
                          compLeft={0}
                          compRight={0}
                          compType="EditText"
                          name="Group271"
                          placeholder={`Select State`}
                        ></Input>
                      </div>
                    </Column>
                    <Column
                      className="items-start w-[100%]"
                      compId="286"
                      comWidth={512}
                      comHeight={103}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[16%]"
                        compId="337:414"
                        comWidth={80}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Zip Code`}</Text>
                      <Input
                        className="placeholder:bg-transparent bg-transparent border border-gray_800 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius8 placeholder:text-gray_800 w-[100%]"
                        compId="285"
                        comWidth={512}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="EditText"
                        name="Group285"
                        placeholder={`Zip Code`}
                      ></Input>
                    </Column>
                  </Row>
                  <Column
                    className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="288"
                    comWidth={1056}
                    comHeight={163}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[4%]"
                      compId="659:108"
                      comWidth={42}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Note`}</Text>
                    <Input
                      className="placeholder:bg-transparent bg-transparent border border-gray_800 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius8 placeholder:text-gray_800 w-[100%]"
                      compId="287"
                      comWidth={1056}
                      comHeight={120}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Group287"
                      placeholder={`Note`}
                    ></Input>
                  </Column>
                </Column>
              </Column>
              <Column
                className="bg-gray_50 border border-gray_800 border-solid items-start justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius8 w-[27%]"
                compId="1268"
                comWidth={512}
                comHeight={941}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-center w-[100%]"
                  compId="1279"
                  comWidth={512}
                  comHeight={511}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[51%]"
                    compId="659:49"
                    comWidth={259}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Your Order Summary`}</Text>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] mx-[auto] w-[90%]"
                    compId="1274"
                    comWidth={459}
                    comHeight={129}
                    compLeft={10}
                    compRight={10}
                    compType="List"
                    orientation="vertical"
                  >
                    <Row
                      className="items-center justify-start 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[100%]"
                      compId="659:73"
                      comWidth={459}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[3%]"
                        compId="659:68"
                        comWidth={16}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`1x`}</Text>
                      <Text
                        className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[42%]"
                        compId="659:69"
                        comWidth={192}
                        comHeight={27}
                        compLeft={32}
                        compRight={0}
                        compType="Text"
                      >{`USB Speaker Portable`}</Text>
                      <Text
                        className="font-medium xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[15%]"
                        compId="659:70"
                        comWidth={69}
                        comHeight={27}
                        compLeft={150}
                        compRight={0}
                        compType="Text"
                      >{`$100.00`}</Text>
                    </Row>
                    <Line
                      className="self-center w-[24%] h-[1px] opacity-op5 bg-gray_800"
                      compId="659:65"
                      comWidth={459}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Row
                      className="items-center justify-start 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[100%]"
                      compId="659:74"
                      comWidth={459}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[3%]"
                        compId="659:75"
                        comWidth={16}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`1x`}</Text>
                      <Text
                        className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[23%]"
                        compId="659:76"
                        comWidth={106}
                        comHeight={27}
                        compLeft={32}
                        compRight={0}
                        compType="Text"
                      >{`Joystick Pro`}</Text>
                      <Text
                        className="font-medium lg:ml-[137px] xl:ml-[157px] 2xl:ml-[177px] 3xl:ml-[212px] ml-[236px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[15%]"
                        compId="659:77"
                        comWidth={69}
                        comHeight={27}
                        compLeft={236}
                        compRight={0}
                        compType="Text"
                      >{`$100.00`}</Text>
                    </Row>
                    <Line
                      className="self-center w-[24%] h-[1px] opacity-op5 bg-gray_800"
                      compId="659:65"
                      comWidth={459}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Row
                      className="items-center justify-start 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[100%]"
                      compId="659:78"
                      comWidth={459}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[3%]"
                        compId="659:79"
                        comWidth={16}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`1x`}</Text>
                      <Text
                        className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[31%]"
                        compId="659:80"
                        comWidth={143}
                        comHeight={27}
                        compLeft={32}
                        compRight={0}
                        compType="Text"
                      >{`Smartphone 5G`}</Text>
                      <Text
                        className="font-medium lg:ml-[116px] xl:ml-[132px] 2xl:ml-[149px] 3xl:ml-[179px] ml-[199px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[15%]"
                        compId="659:81"
                        comWidth={69}
                        comHeight={27}
                        compLeft={199}
                        compRight={0}
                        compType="Text"
                      >{`$100.00`}</Text>
                    </Row>
                  </List>
                  <Row
                    className="items-center justify-between lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] mx-[auto] w-[90%]"
                    compId="659:83"
                    comWidth={459}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Text
                      className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[17%]"
                      compId="659:56"
                      comWidth={77}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Subtotal`}</Text>
                    <Text
                      className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[16%]"
                      compId="659:58"
                      comWidth={73}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`$300.00`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[90%]"
                    compId="659:84"
                    comWidth={459}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Text
                      className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[18%]"
                      compId="659:55"
                      comWidth={81}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Shipping`}</Text>
                    <Text
                      className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[12%]"
                      compId="659:57"
                      comWidth={57}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`$15.00`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[90%]"
                    compId="659:85"
                    comWidth={459}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Text
                      className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[7%]"
                      compId="659:53"
                      comWidth={32}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Tax`}</Text>
                    <Text
                      className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[12%]"
                      compId="659:54"
                      comWidth={57}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`$10.00`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[40px] xl:mt-[46px] 2xl:mt-[51px] 3xl:mt-[62px] mt-[69px] mx-[auto] w-[90%]"
                    compId="659:46"
                    comWidth={459}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Text
                      className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[13%]"
                      compId="659:47"
                      comWidth={61}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Total`}</Text>
                    <Text
                      className="font-medium text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[21%]"
                      compId="659:48"
                      comWidth={96}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`$325.00`}</Text>
                  </Row>
                </Column>
                <Text
                  className="font-semibold lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] mt-[72px] lg:mx-[15px] xl:mx-[18px] 2xl:mx-[20px] 3xl:mx-[24px] mx-[27px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[22%]"
                  compId="659:64"
                  comWidth={111}
                  comHeight={36}
                  compLeft={27}
                  compRight={27}
                  compType="Text"
                >{`Payment`}</Text>
                <Column
                  className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="1280"
                  comWidth={512}
                  comHeight={226}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-start mx-[auto] w-[90%]"
                    compId="659:59"
                    comWidth={459}
                    comHeight={47}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Text
                      className="border border-gray_800 border-solid font-normal leading-lh not-italic lg:p-[5px] xl:p-[6px] 2xl:px-[6px] 3xl:px-[8px] px-[9px] py-[10px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[31%]"
                      compId="265"
                      comWidth={143}
                      comHeight={47}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Credit Card`}</Text>
                    <Button
                      className="bg-gray_800 border border-gray_800 border-solid font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic 3xl:py-[10px] py-[11.545px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[31%]"
                      compId="264"
                      comWidth={141}
                      comHeight={47}
                      compLeft={16}
                      compRight={0}
                      compType="Button"
                    >{`Bank Transfer`}</Button>
                    <Text
                      className="border border-gray_800 border-solid font-normal leading-lh xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:p-[5px] xl:p-[6px] 2xl:px-[6px] 3xl:px-[8px] px-[9px] py-[10px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[31%]"
                      compId="263"
                      comWidth={143}
                      comHeight={47}
                      compLeft={16}
                      compRight={0}
                      compType="Text"
                    >{`Paypal`}</Text>
                  </Row>
                  <Button
                    className="bg-deep_orange_400 font-medium lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] mx-[auto] lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] py-[20.045px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[90%]"
                    compId="262"
                    comWidth={459}
                    comHeight={64}
                    compLeft={10}
                    compRight={10}
                    compType="Button"
                  >{`Checkout`}</Button>
                  <Text
                    className="font-medium lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[22%]"
                    compId="659:45"
                    comWidth={112}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Back to Cart`}</Text>
                </Column>
              </Column>
            </Row>
            <Row
              className="bg-deep_orange_400 font-poppins items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
              compId="1253"
              comWidth={1920}
              comHeight={245}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_newsletter.svg"}
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] xl:mb-[49px] 2xl:mb-[55px] 3xl:mb-[66px] mb-[74px] lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] ml-[256px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] mt-[75px] lg:my-[43px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                compId="1057:590"
                comWidth={96}
                comHeight={96}
                compLeft={256}
                compRight={0}
                compType="Image"
                alt="Newsletter"
              />
              <Column
                className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[40px] xl:my-[46px] 2xl:my-[51px] 3xl:my-[62px] my-[69px] w-[33%]"
                compId="1057:598"
                comWidth={637}
                comHeight={107}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold font-montserrat lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[100%]"
                  compId="1057:599"
                  comWidth={637}
                  comHeight={59}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Join our newsletter now!`}</Text>
                <Text
                  className="font-normal font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[75%]"
                  compId="1057:600"
                  comWidth={480}
                  comHeight={32}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Register now and get our latest updates and promos.`}</Text>
              </Column>
              <Stack
                className="lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] h-[76px] 3xl:mb-[75px] mb-[84px] 3xl:ml-[105px] ml-[117px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] 3xl:mt-[76px] mt-[85px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] w-[27%]"
                compId="1272"
                comWidth={526}
                comHeight={76}
                compLeft={117}
                compRight={0}
                compType="Stack"
              >
                <Input
                  className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[15px] pb-[26.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pt-[14px] pt-[25.545px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500 text-gray_500 text-left tracking-ls1 w-[100%]"
                  compId="272"
                  comWidth={526}
                  comHeight={76}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Group272"
                  placeholder={`Enter your email`}
                ></Input>
                <Button
                  className="absolute bg-gray_800 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[2%] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
                  compId="266"
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
              compId="1057:601"
              comWidth={1920}
              comHeight={585}
              compLeft={0}
              compRight={0}
              compType="Footer"
            >
              <Column
                className="bg-deep_orange_400_cf items-center justify-end w-[100%]"
                compId="1257"
                comWidth={1920}
                comHeight={585}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-start justify-start lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
                  compId="1254"
                  comWidth={1920}
                  comHeight={260}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start justify-start 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] w-[20%]"
                    compId="1256"
                    comWidth={381}
                    comHeight={246}
                    compLeft={160}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[29%]"
                      compId="1057:612"
                      comWidth={112}
                      comHeight={54}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Tronix`}</Text>
                    <Text
                      className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                      compId="1057:613"
                      comWidth={381}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                      compId="1057:648"
                      comWidth={243}
                      comHeight={32}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_call_2.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1057:649"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Call"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                        compId="1057:651"
                        comWidth={211}
                        comHeight={32}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >{`+1234567890`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[64%]"
                      compId="1057:652"
                      comWidth={243}
                      comHeight={32}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_email_2.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1057:653"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Email"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                        compId="1057:655"
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
                    compId="1057:614"
                    comWidth={120}
                    comHeight={260}
                    compLeft={435}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1057:615"
                      comWidth={120}
                      comHeight={29}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Company`}</Text>
                    <Column
                      className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[67%]"
                      compId="1057:616"
                      comWidth={80}
                      comHeight={199}
                      compLeft={0}
                      compRight={10}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[68%]"
                        compId="1057:617"
                        comWidth={54}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`About`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                        compId="1057:618"
                        comWidth={80}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Products`}</Text>
                      <Text
                        className="font-normal lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] mr-[6px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[93%]"
                        compId="1057:619"
                        comWidth={74}
                        comHeight={27}
                        compLeft={0}
                        compRight={6}
                        compType="Text"
                      >{`Contact`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[50%]"
                        compId="1057:620"
                        comWidth={40}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Blog`}</Text>
                      <Text
                        className="font-normal lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[90%]"
                        compId="1057:621"
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
                    compId="1057:622"
                    comWidth={164}
                    comHeight={217}
                    compLeft={152}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[91%]"
                      compId="1057:623"
                      comWidth={150}
                      comHeight={29}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Information`}</Text>
                    <Column
                      className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                      compId="1281"
                      comWidth={164}
                      comHeight={156}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="items-start justify-start w-[100%]"
                        compId="1057:624"
                        comWidth={164}
                        comHeight={156}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[65%]"
                          compId="1057:625"
                          comWidth={107}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Help Center`}</Text>
                        <Text
                          className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                          compId="1057:626"
                          comWidth={164}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Payment Methods`}</Text>
                        <Text
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[88%]"
                          compId="1057:627"
                          comWidth={145}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Return & Refund`}</Text>
                        <Text
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[74%]"
                          compId="1057:628"
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
                    compId="1057:629"
                    comWidth={216}
                    comHeight={117}
                    compLeft={108}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[56%]"
                      compId="1057:630"
                      comWidth={122}
                      comHeight={29}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Follow Us`}</Text>
                    <Column
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                      compId="1282"
                      comWidth={216}
                      comHeight={56}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Image
                        src={"images/img_sosmedia_12.svg"}
                        className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-cover w-[100%]"
                        compId="1057:631"
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
                  compId="1057:656"
                  comWidth={1600}
                  comHeight={1}
                  compLeft={10}
                  compRight={10}
                  compType="Line"
                />
                <Row
                  className="items-center justify-between lg:mb-[31px] xl:mb-[36px] 2xl:mb-[40px] 3xl:mb-[48px] mb-[54px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] w-[100%]"
                  compId="1255"
                  comWidth={1920}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_800 text-left w-[15%]"
                    compId="1057:610"
                    comWidth={287}
                    comHeight={21}
                    compLeft={160}
                    compRight={0}
                    compType="Text"
                  >{`Copyright © 2021 Tronix. All Right Reseved`}</Text>
                  <Image
                    src={"images/img_payment_4.svg"}
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] mr-[160px] lg:mr-[93px] object-contain w-[7%]"
                    compId="1057:603"
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

export default CheckoutPage;
