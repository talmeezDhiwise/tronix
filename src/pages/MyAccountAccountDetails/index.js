import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { Line } from "components/Line";
import { Grid } from "components/Grid";
import { Input } from "components/Input";
import { Button } from "components/Button";

const MyAccountAccountDetailsPage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins mx-[auto] w-[100%]"
        compId="1083:932"
        comWidth={1920}
        comHeight={1760}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="336"
          comWidth={1920}
          comHeight={120}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Row
            className="items-center justify-start rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[100%]"
            compId="1445"
            comWidth={1920}
            comHeight={120}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-semibold xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:my-[19px] xl:my-[22px] 2xl:my-[24px] 3xl:my-[29px] my-[33px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[6%]"
              compId="1083:1019"
              comWidth={112}
              comHeight={54}
              compLeft={160}
              compRight={0}
              compType="Text"
            >{`Tronix`}</Text>
            <Row
              className="bg-bluegray_100_3f items-center justify-center 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] my-[36px] rounded-radius8 w-[28%]"
              compId="1443"
              comWidth={544}
              comHeight={48}
              compLeft={128}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-normal mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[20%]"
                compId="1083:1022"
                comWidth={109}
                comHeight={27}
                compLeft={32}
                compRight={0}
                compType="Text"
              >{`Search here`}</Text>
              <Image
                src={"images/img_search_1.svg"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[207px] xl:ml-[236px] 2xl:ml-[266px] 3xl:ml-[319px] ml-[355px] object-contain rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                compId="1083:1023"
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
              compId="1463"
              comWidth={473}
              comHeight={27}
              compLeft={103}
              compRight={0}
              compType="Row"
            >
              <Text
                className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                compId="1083:1039"
                comWidth={54}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Home`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                compId="1083:1040"
                comWidth={54}
                comHeight={27}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`About`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[15%]"
                compId="1083:1041"
                comWidth={70}
                comHeight={27}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`Product`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[8%]"
                compId="1083:1042"
                comWidth={40}
                comHeight={27}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`Blog`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal font-nunitosans lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] my-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[13%]"
                compId="1083:1043"
                comWidth={63}
                comHeight={25}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`Contact`}</Text>
            </Row>
            <Row
              className="items-end justify-center lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] mb-[44px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[8%]"
              compId="1441"
              comWidth={160}
              comHeight={44}
              compLeft={80}
              compRight={0}
              compType="Row"
            >
              <Stack
                className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] h-[44px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px] w-[44px]"
                compId="1459"
                comWidth={44}
                comHeight={44}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_shoppingbag_7.svg"}
                  className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] left-[0] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                  compId="1083:1030"
                  comWidth={32}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="ShoppingBag"
                />
                <Column
                  className="absolute bg-deep_orange_400 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] items-center justify-start lg:py-[1px] 3xl:py-[2px] 2xl:py-[2px] xl:py-[2px] py-[3px] right-[0] rounded-radius50 top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="335"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic 3xl:text-fs10 text-fs12 lg:text-fs7 xl:text-fs8 2xl:text-fs9 text-gray_50 text-left w-[67%]"
                    compId="1083:1037"
                    comWidth={16}
                    comHeight={18}
                    compLeft={4}
                    compRight={4}
                    compType="Text"
                  >{`99`}</Text>
                </Column>
              </Stack>
              <Image
                src={"images/img_email_11.svg"}
                className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                compId="1083:1032"
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
                compId="1083:1034"
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
        <Column
          className="bg-bluegray_100 font-montserrat items-center justify-start mt-[1px] opacity-op1 lg:py-[46px] xl:py-[53px] 2xl:py-[60px] 3xl:py-[72px] py-[80px] w-[100%]"
          compId="333"
          comWidth={1920}
          comHeight={729}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="bg-gray_50 border border-bluegray_100 border-solid items-start justify-start mx-[auto] rounded-radius32 w-[83%]"
            compId="1451"
            comWidth={1600}
            comHeight={569}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Column
              className="items-start justify-start 3xl:mb-[115px] mb-[128px] lg:mb-[74px] xl:mb-[85px] 2xl:mb-[96px] lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[12%]"
              compId="1089:389"
              comWidth={193}
              comHeight={377}
              compLeft={64}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[100%]"
                compId="1083:948"
                comWidth={193}
                comHeight={44}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`My Profile`}</Text>
              <Column
                className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] w-[73%]"
                compId="1083:1115"
                comWidth={141}
                comHeight={285}
                compLeft={0}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-normal not-italic text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[100%]"
                  compId="1083:1116"
                  comWidth={141}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Account Details`}</Text>
                <Text
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[43%]"
                  compId="1083:1117"
                  comWidth={61}
                  comHeight={27}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Orders`}</Text>
                <Text
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[40%]"
                  compId="1083:1118"
                  comWidth={57}
                  comHeight={27}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Wallet`}</Text>
                <Text
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[67%]"
                  compId="1083:1119"
                  comWidth={94}
                  comHeight={27}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Addresses`}</Text>
                <Text
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[79%]"
                  compId="1083:1120"
                  comWidth={112}
                  comHeight={27}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`My Favorites`}</Text>
                <Text
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[45%]"
                  compId="1083:1121"
                  comWidth={63}
                  comHeight={27}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Loyalty`}</Text>
                <Text
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[44%]"
                  compId="1083:1122"
                  comWidth={62}
                  comHeight={27}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Logout`}</Text>
              </Column>
            </Column>
            <Line
              className="bg-gray_800 lg:h-[267px] xl:h-[305px] 2xl:h-[343px] 3xl:h-[412px] h-[457px] lg:mb-[28px] xl:mb-[32px] 2xl:mb-[36px] 3xl:mb-[43px] mb-[48px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] opacity-op5 rotate-[90deg] w-[1px]"
              compId="1083:1131"
              comWidth={1}
              comHeight={457}
              compLeft={80}
              compRight={0}
              compType="Line"
            />
            <Column
              className="items-start justify-start lg:mb-[28px] xl:mb-[32px] 2xl:mb-[36px] 3xl:mb-[43px] mb-[48px] lg:ml-[46px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[71px] ml-[79px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[67%]"
              compId="1450"
              comWidth={1079}
              comHeight={457}
              compLeft={79}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold font-montserrat mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[28%]"
                compId="1083:1163"
                comWidth={300}
                comHeight={44}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Account Details`}</Text>
              <Text
                className="font-normal font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[33%]"
                compId="1083:1164"
                comWidth={358}
                comHeight={27}
                compLeft={0}
                compRight={10}
                compType="Text"
              >
                <span className="text-gray_500">
                  <>{`Already have an account? Please, `}</>
                </span>
                <span className="text-deep_orange_400">
                  <>{`login`}</>
                </span>
                <span className="text-gray_500">
                  <>{`!`}</>
                </span>
              </Text>
              <Column
                className="font-poppins lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] w-[100%]"
                compId="1464"
                comWidth={1079}
                comHeight={238}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Grid
                  className="lg:gap-[32px] xl:gap-[36px] 2xl:gap-[41px] 3xl:gap-[49px] gap-[55px] grid grid-cols-2 w-[100%]"
                  compId="1462"
                  comWidth={1079}
                  comHeight={238}
                  compLeft={0}
                  compRight={0}
                  compType="Grid"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="339"
                    comWidth={512}
                    comHeight={103}
                    compLeft={0}
                    compRight={567}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[19%]"
                      compId="1083:1134"
                      comWidth={96}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`First Name`}</Text>
                    <Input
                      className="placeholder:bg-transparent bg-transparent border border-gray_800 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius8 placeholder:text-gray_800 w-[100%]"
                      compId="338"
                      comWidth={512}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Group338"
                      placeholder={`First Name`}
                    ></Input>
                  </Column>
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="341"
                    comWidth={512}
                    comHeight={103}
                    compLeft={567}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[19%]"
                      compId="1083:1137"
                      comWidth={96}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Last Name`}</Text>
                    <Input
                      className="placeholder:bg-transparent bg-transparent border border-gray_800 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius8 placeholder:text-gray_800 w-[100%]"
                      compId="340"
                      comWidth={512}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Group340"
                      placeholder={`Last Name`}
                    ></Input>
                  </Column>
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="343"
                    comWidth={512}
                    comHeight={103}
                    compLeft={0}
                    compRight={567}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[10%]"
                      compId="1083:1140"
                      comWidth={49}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Email`}</Text>
                    <Input
                      className="placeholder:bg-transparent bg-transparent border border-gray_800 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius8 placeholder:text-gray_800 w-[100%]"
                      compId="342"
                      comWidth={512}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Group342"
                      placeholder={`Email`}
                    ></Input>
                  </Column>
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="345"
                    comWidth={512}
                    comHeight={103}
                    compLeft={567}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[11%]"
                      compId="1083:1143"
                      comWidth={57}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Phone`}</Text>
                    <Input
                      className="placeholder:bg-transparent bg-transparent border border-gray_800 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius8 placeholder:text-gray_800 w-[100%]"
                      compId="344"
                      comWidth={512}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Group344"
                      placeholder={`Phone`}
                    ></Input>
                  </Column>
                </Grid>
              </Column>
              <Column
                className="font-poppins items-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                compId="1465"
                comWidth={1079}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Button
                  className="bg-deep_orange_400 font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:pb-[11px] 3xl:pb-[15px] pb-[17.545px] xl:pt-[12px] 3xl:pt-[16px] pt-[18.545px] lg:py-[10px] 2xl:py-[13px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[15%]"
                  compId="1083:1166"
                  comWidth={160}
                  comHeight={60}
                  compLeft={10}
                  compRight={0}
                  compType="Button"
                >{`Save`}</Button>
              </Column>
            </Column>
          </Row>
        </Column>
        <Row
          className="bg-deep_orange_400 font-poppins items-center justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
          compId="1452"
          comWidth={1920}
          comHeight={245}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Image
            src={"images/img_newsletter_2.svg"}
            className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] xl:mb-[49px] 2xl:mb-[55px] 3xl:mb-[66px] mb-[74px] lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] ml-[256px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] mt-[75px] lg:my-[43px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
            compId="1083:1046"
            comWidth={96}
            comHeight={96}
            compLeft={256}
            compRight={0}
            compType="Image"
            alt="Newsletter"
          />
          <Column
            className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[40px] xl:my-[46px] 2xl:my-[51px] 3xl:my-[62px] my-[69px] w-[33%]"
            compId="1083:1054"
            comWidth={637}
            comHeight={107}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold font-montserrat lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[100%]"
              compId="1083:1055"
              comWidth={637}
              comHeight={59}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Join our newsletter now!`}</Text>
            <Text
              className="font-normal font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[75%]"
              compId="1083:1056"
              comWidth={480}
              comHeight={32}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`Register now and get our latest updates and promos.`}</Text>
          </Column>
          <Stack
            className="lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] h-[76px] 3xl:mb-[75px] mb-[84px] 3xl:ml-[105px] ml-[117px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] 3xl:mt-[76px] mt-[85px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] w-[27%]"
            compId="1461"
            comWidth={526}
            comHeight={76}
            compLeft={117}
            compRight={0}
            compType="Stack"
          >
            <Input
              className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[15px] pb-[26.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pt-[14px] pt-[25.545px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500 text-gray_500 text-left tracking-ls1 w-[100%]"
              compId="337"
              comWidth={526}
              comHeight={76}
              compLeft={0}
              compRight={0}
              compType="EditText"
              name="Group337"
              placeholder={`Enter your email`}
            ></Input>
            <Button
              className="absolute bg-gray_800 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[2%] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
              compId="334"
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
          compId="1083:1057"
          comWidth={1920}
          comHeight={585}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="bg-deep_orange_400_cf items-center justify-end w-[100%]"
            compId="1456"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-start justify-start lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
              compId="1453"
              comWidth={1920}
              comHeight={260}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] w-[20%]"
                compId="1455"
                comWidth={381}
                comHeight={246}
                compLeft={160}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[29%]"
                  compId="1083:1068"
                  comWidth={112}
                  comHeight={54}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Tronix`}</Text>
                <Text
                  className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                  compId="1083:1069"
                  comWidth={381}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                <Row
                  className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                  compId="1083:1104"
                  comWidth={243}
                  comHeight={32}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Image
                    src={"images/img_call_6.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1083:1105"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Call"
                  />
                  <Text
                    className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                    compId="1083:1107"
                    comWidth={211}
                    comHeight={32}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`+1234567890`}</Text>
                </Row>
                <Row
                  className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[64%]"
                  compId="1083:1108"
                  comWidth={243}
                  comHeight={32}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Image
                    src={"images/img_email_2.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1083:1109"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Email"
                  />
                  <Text
                    className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                    compId="1083:1111"
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
                compId="1083:1070"
                comWidth={120}
                comHeight={260}
                compLeft={435}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                  compId="1083:1071"
                  comWidth={120}
                  comHeight={29}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Company`}</Text>
                <Column
                  className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[67%]"
                  compId="1083:1072"
                  comWidth={80}
                  comHeight={199}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[68%]"
                    compId="1083:1073"
                    comWidth={54}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                    compId="1083:1074"
                    comWidth={80}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Products`}</Text>
                  <Text
                    className="font-normal lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] mr-[6px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[93%]"
                    compId="1083:1075"
                    comWidth={74}
                    comHeight={27}
                    compLeft={0}
                    compRight={6}
                    compType="Text"
                  >{`Contact`}</Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[50%]"
                    compId="1083:1076"
                    comWidth={40}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Blog`}</Text>
                  <Text
                    className="font-normal lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[90%]"
                    compId="1083:1077"
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
                compId="1083:1078"
                comWidth={164}
                comHeight={217}
                compLeft={152}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[91%]"
                  compId="1083:1079"
                  comWidth={150}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Information`}</Text>
                <Column
                  className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="1466"
                  comWidth={164}
                  comHeight={156}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="1083:1080"
                    comWidth={164}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[65%]"
                      compId="1083:1081"
                      comWidth={107}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Help Center`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                      compId="1083:1082"
                      comWidth={164}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Payment Methods`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[88%]"
                      compId="1083:1083"
                      comWidth={145}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Return & Refund`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[74%]"
                      compId="1083:1084"
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
                compId="1083:1085"
                comWidth={216}
                comHeight={117}
                compLeft={108}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[56%]"
                  compId="1083:1086"
                  comWidth={122}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Follow Us`}</Text>
                <Column
                  className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="1467"
                  comWidth={216}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_sosmedia_16.svg"}
                    className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-cover w-[100%]"
                    compId="1083:1087"
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
              compId="1083:1112"
              comWidth={1600}
              comHeight={1}
              compLeft={10}
              compRight={10}
              compType="Line"
            />
            <Row
              className="items-center justify-between lg:mb-[31px] xl:mb-[36px] 2xl:mb-[40px] 3xl:mb-[48px] mb-[54px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] w-[100%]"
              compId="1454"
              comWidth={1920}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-normal lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_800 text-left w-[15%]"
                compId="1083:1066"
                comWidth={287}
                comHeight={21}
                compLeft={160}
                compRight={0}
                compType="Text"
              >{`Copyright © 2021 Tronix. All Right Reseved`}</Text>
              <Image
                src={"images/img_payment_4.svg"}
                className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] mr-[160px] lg:mr-[93px] object-contain w-[7%]"
                compId="1083:1059"
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

export default MyAccountAccountDetailsPage;
