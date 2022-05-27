import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { List } from "components/List";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Line } from "components/Line";

const LoginPagePage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins mx-[auto] w-[100%]"
        compId="868:468"
        comWidth={1920}
        comHeight={2020}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="331"
          comWidth={1920}
          comHeight={120}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Row
            className="items-center justify-start rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[100%]"
            compId="1399"
            comWidth={1920}
            comHeight={120}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-semibold xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:my-[19px] xl:my-[22px] 2xl:my-[24px] 3xl:my-[29px] my-[33px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[6%]"
              compId="1063:7"
              comWidth={112}
              comHeight={54}
              compLeft={160}
              compRight={0}
              compType="Text"
            >{`Tronix`}</Text>
            <Row
              className="bg-bluegray_100_3f items-center justify-center 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] my-[36px] rounded-radius8 w-[28%]"
              compId="1397"
              comWidth={544}
              comHeight={48}
              compLeft={128}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-normal mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[20%]"
                compId="1063:10"
                comWidth={109}
                comHeight={27}
                compLeft={32}
                compRight={0}
                compType="Text"
              >{`Search here`}</Text>
              <Image
                src={"images/img_search_1.svg"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[207px] xl:ml-[236px] 2xl:ml-[266px] 3xl:ml-[319px] ml-[355px] object-contain rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                compId="1063:11"
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
              compId="1434"
              comWidth={473}
              comHeight={27}
              compLeft={103}
              compRight={0}
              compType="Row"
            >
              <Text
                className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                compId="1063:27"
                comWidth={54}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Home`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                compId="1063:28"
                comWidth={54}
                comHeight={27}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`About`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[15%]"
                compId="1063:29"
                comWidth={70}
                comHeight={27}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`Product`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[8%]"
                compId="1063:30"
                comWidth={40}
                comHeight={27}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`Blog`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal font-nunitosans lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] my-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[13%]"
                compId="1063:31"
                comWidth={63}
                comHeight={25}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`Contact`}</Text>
            </Row>
            <Row
              className="items-end justify-center lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] mb-[44px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[8%]"
              compId="1395"
              comWidth={160}
              comHeight={44}
              compLeft={80}
              compRight={0}
              compType="Row"
            >
              <Stack
                className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] h-[44px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px] w-[44px]"
                compId="1424"
                comWidth={44}
                comHeight={44}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_shoppingbag_6.svg"}
                  className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] left-[0] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                  compId="1063:18"
                  comWidth={32}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="ShoppingBag"
                />
                <Column
                  className="absolute bg-deep_orange_400 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] items-center justify-start lg:py-[1px] 3xl:py-[2px] 2xl:py-[2px] xl:py-[2px] py-[3px] right-[0] rounded-radius50 top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="330"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic 3xl:text-fs10 text-fs12 lg:text-fs7 xl:text-fs8 2xl:text-fs9 text-gray_50 text-left w-[67%]"
                    compId="1063:25"
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
                compId="1063:20"
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
                compId="1063:22"
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
        <Row
          className="bg-bluegray_100 lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 items-center justify-start mt-[1px] xl:pl-[106px] 2xl:pl-[120px] 3xl:pl-[144px] pl-[160px] lg:pl-[93px] w-[100%]"
          compId="1409"
          comWidth={1920}
          comHeight={989}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Column
            className="bg-gray_50 border border-bluegray_100 border-solid items-start lg:my-[46px] xl:my-[53px] 2xl:my-[60px] 3xl:my-[72px] my-[80px] rounded-radius32 w-[100%]"
            compId="1405"
            comWidth={784}
            comHeight={829}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold font-montserrat lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] 2xl:mx-[102px] 3xl:mx-[122px] mx-[136px] lg:mx-[79px] xl:mx-[90px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[18%]"
              compId="868:583"
              comWidth={142}
              comHeight={59}
              compLeft={136}
              compRight={136}
              compType="Text"
            >{`Login`}</Text>
            <Text
              className="font-normal font-poppins lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] 2xl:mx-[102px] 3xl:mx-[122px] mx-[136px] lg:mx-[79px] xl:mx-[90px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[46%]"
              compId="1063:2"
              comWidth={358}
              comHeight={27}
              compLeft={136}
              compRight={136}
              compType="Text"
            >{`Already have an account? Please, login!`}</Text>
            <Text
              className="font-normal font-poppins lg:mt-[33px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] mt-[57px] 2xl:mx-[102px] 3xl:mx-[122px] mx-[136px] lg:mx-[79px] xl:mx-[90px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[6%]"
              compId="868:584"
              comWidth={49}
              comHeight={27}
              compLeft={136}
              compRight={136}
              compType="Text"
            >{`Email`}</Text>
            <Row
              className="border border-bluegray_100 border-solid font-poppins items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] rounded-radius8 w-[65%]"
              compId="1400"
              comWidth={512}
              comHeight={60}
              compLeft={136}
              compRight={136}
              compType="Row"
            >
              <Image
                src={"images/img_user_4.svg"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain rounded-radius8 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                compId="868:670"
                comWidth={24}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="User"
              />
              <Text
                className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[32%]"
                compId="868:585"
                comWidth={165}
                comHeight={27}
                compLeft={8}
                compRight={0}
                compType="Text"
              >{`email@email.com`}</Text>
            </Row>
            <Column
              className="font-poppins items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[65%]"
              compId="868:597"
              comWidth={512}
              comHeight={103}
              compLeft={136}
              compRight={136}
              compType="Column"
            >
              <Text
                className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[17%]"
                compId="868:586"
                comWidth={87}
                comHeight={27}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Password`}</Text>
              <Column
                className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                compId="1435"
                comWidth={512}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Stack
                  className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] w-[100%]"
                  compId="1426"
                  comWidth={512}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Text
                    className="absolute font-bold h-[max-content] inset-y-[0] left-[9%] my-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[19%]"
                    compId="868:579"
                    comWidth={97}
                    comHeight={36}
                    compLeft={45}
                    compRight={0}
                    compType="Text"
                  >{`••••••••`}</Text>
                  <Row
                    className="absolute border border-bluegray_100 border-solid lg:gap-[256px] xl:gap-[292px] 2xl:gap-[329px] 3xl:gap-[395px] gap-[439px] grid grid-cols-2 inset-[0] items-center justify-between 3xl:pl-[11px] pl-[13px] 3xl:pr-[10px] pr-[12px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius8 w-[100%]"
                    compId="1401"
                    comWidth={512}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_lock.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain rounded-radius8 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="868:673"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Lock"
                    />
                    <Image
                      src={"images/img_eye.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain rounded-radius8 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="868:675"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Eye"
                    />
                  </Row>
                </Stack>
              </Column>
            </Column>
            <Text
              className="bg-deep_orange_400 font-medium font-poppins leading-lh lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] mx-[auto] lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[14px] py-[16.5px] lg:py-[9px] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[65%]"
              compId="868:590"
              comWidth={512}
              comHeight={60}
              compLeft={136}
              compRight={136}
              compType="Text"
            >{`Login`}</Text>
            <Row
              className="font-poppins items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[65%]"
              compId="868:604"
              comWidth={512}
              comHeight={27}
              compLeft={136}
              compRight={136}
              compType="Row"
            >
              <Image
                src={"images/img_checkedbox_3.svg"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                compId="868:601"
                comWidth={24}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Checkedbox"
              />
              <Text
                className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[26%]"
                compId="868:587"
                comWidth={132}
                comHeight={27}
                compLeft={8}
                compRight={0}
                compType="Text"
              >{`Remember Me`}</Text>
              <Text
                className="font-normal lg:ml-[109px] xl:ml-[124px] 2xl:ml-[140px] 3xl:ml-[168px] ml-[187px] not-italic text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[31%]"
                compId="868:588"
                comWidth={161}
                comHeight={27}
                compLeft={187}
                compRight={0}
                compType="Text"
              >{`Forgot password?`}</Text>
            </Row>
            <Row
              className="font-montserrat items-center justify-center lg:mb-[42px] xl:mb-[48px] 2xl:mb-[54px] 3xl:mb-[65px] mb-[73px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] mx-[auto] w-[44%]"
              compId="868:658"
              comWidth={344}
              comHeight={40}
              compLeft={136}
              compRight={136}
              compType="Row"
            >
              <Text
                className="font-bold lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[42%]"
                compId="868:647"
                comWidth={146}
                comHeight={29}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Login With:`}</Text>
              <Image
                src={"images/img_sosmedia_14.svg"}
                className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] object-contain rounded-radius8 w-[49%]"
                compId="868:648"
                comWidth={168}
                comHeight={40}
                compLeft={30}
                compRight={0}
                compType="Image"
                alt="sosmedia"
              />
            </Row>
          </Column>
          <Column
            className="bg-gray_50 border border-bluegray_100 border-solid items-start lg:my-[46px] xl:my-[53px] 2xl:my-[60px] 3xl:my-[72px] my-[80px] rounded-radius32 w-[100%]"
            compId="1419"
            comWidth={784}
            comHeight={829}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold font-montserrat lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] 3xl:mx-[116px] mx-[129px] lg:mx-[75px] xl:mx-[86px] 2xl:mx-[96px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[50%]"
              compId="868:618"
              comWidth={390}
              comHeight={59}
              compLeft={129}
              compRight={129}
              compType="Text"
            >{`Create Account`}</Text>
            <Text
              className="font-normal font-poppins lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] 3xl:mx-[116px] mx-[129px] lg:mx-[75px] xl:mx-[86px] 2xl:mx-[96px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[64%]"
              compId="868:637"
              comWidth={500}
              comHeight={32}
              compLeft={129}
              compRight={129}
              compType="Text"
            >{`Don't have an account yet? Register here!`}</Text>
            <Text
              className="font-normal font-poppins lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] 3xl:mx-[116px] mx-[129px] lg:mx-[75px] xl:mx-[86px] 2xl:mx-[96px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[6%]"
              compId="868:683"
              comWidth={49}
              comHeight={27}
              compLeft={129}
              compRight={129}
              compType="Text"
            >{`Email`}</Text>
            <Column
              className="font-poppins items-center lg:mb-[54px] xl:mb-[62px] 2xl:mb-[69px] 3xl:mb-[83px] mb-[93px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
              compId="1436"
              comWidth={784}
              comHeight={434}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="border border-bluegray_100 border-solid items-center justify-center mx-[auto] rounded-radius8 w-[66%]"
                compId="1406"
                comWidth={519}
                comHeight={60}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Image
                  src={"images/img_user_4.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="868:685"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="User"
                />
                <Text
                  className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[32%]"
                  compId="868:684"
                  comWidth={165}
                  comHeight={27}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >{`email@email.com`}</Text>
              </Row>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[66%]"
                compId="1433"
                comWidth={519}
                comHeight={238}
                compLeft={10}
                compRight={10}
                compType="List"
                orientation="vertical"
              >
                <Column
                  className="items-start justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                  compId="868:688"
                  comWidth={519}
                  comHeight={103}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[17%]"
                    compId="868:691"
                    comWidth={87}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Password`}</Text>
                  <Column
                    className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                    compId="1437"
                    comWidth={519}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Stack
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] w-[100%]"
                      compId="1428"
                      comWidth={519}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Text
                        className="absolute font-bold h-[max-content] inset-y-[0] left-[9%] my-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[19%]"
                        compId="868:689"
                        comWidth={97}
                        comHeight={36}
                        compLeft={48}
                        compRight={0}
                        compType="Text"
                      >{`••••••••`}</Text>
                      <Row
                        className="absolute border border-bluegray_100 border-solid lg:gap-[256px] xl:gap-[292px] 2xl:gap-[329px] 3xl:gap-[395px] gap-[439px] grid grid-cols-2 inset-[0] items-center justify-between xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] px-[16px] lg:px-[9px] rounded-radius8 w-[100%]"
                        compId="1407"
                        comWidth={519}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_lock.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="868:692"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Lock"
                        />
                        <Image
                          src={"images/img_eye.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="868:694"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Eye"
                        />
                      </Row>
                    </Stack>
                  </Column>
                </Column>
                <Column
                  className="items-start justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                  compId="868:701"
                  comWidth={519}
                  comHeight={103}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[32%]"
                    compId="868:704"
                    comWidth={164}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Confirm Password`}</Text>
                  <Column
                    className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                    compId="1438"
                    comWidth={519}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Stack
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] w-[100%]"
                      compId="1430"
                      comWidth={519}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Text
                        className="absolute font-bold h-[max-content] inset-y-[0] left-[9%] my-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[19%]"
                        compId="868:702"
                        comWidth={97}
                        comHeight={36}
                        compLeft={48}
                        compRight={0}
                        compType="Text"
                      >{`••••••••`}</Text>
                      <Row
                        className="absolute border border-bluegray_100 border-solid lg:gap-[256px] xl:gap-[292px] 2xl:gap-[329px] 3xl:gap-[395px] gap-[439px] grid grid-cols-2 inset-[0] items-center justify-between xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] px-[16px] lg:px-[9px] rounded-radius8 w-[100%]"
                        compId="1408"
                        comWidth={519}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_lock.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="868:705"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Lock"
                        />
                        <Image
                          src={"images/img_eye.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="868:707"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Eye"
                        />
                      </Row>
                    </Stack>
                  </Column>
                </Column>
              </List>
              <Button
                className="bg-deep_orange_400 font-medium lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] mt-[44px] mx-[auto] xl:pb-[11px] 3xl:pb-[15px] pb-[17.545px] xl:pt-[12px] 3xl:pt-[16px] pt-[18.545px] lg:py-[10px] 2xl:py-[13px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[66%]"
                compId="868:634"
                comWidth={519}
                comHeight={60}
                compLeft={10}
                compRight={10}
                compType="Button"
              >{`Register`}</Button>
            </Column>
          </Column>
        </Row>
        <Row
          className="bg-deep_orange_400 items-center justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
          compId="1410"
          comWidth={1920}
          comHeight={245}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Image
            src={"images/img_newsletter_1.svg"}
            className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] xl:mb-[49px] 2xl:mb-[55px] 3xl:mb-[66px] mb-[74px] lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] ml-[256px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] mt-[75px] lg:my-[43px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
            compId="1063:34"
            comWidth={96}
            comHeight={96}
            compLeft={256}
            compRight={0}
            compType="Image"
            alt="Newsletter"
          />
          <Column
            className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[40px] xl:my-[46px] 2xl:my-[51px] 3xl:my-[62px] my-[69px] w-[33%]"
            compId="1063:42"
            comWidth={637}
            comHeight={107}
            compLeft={32}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold font-montserrat lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[100%]"
              compId="1063:43"
              comWidth={637}
              comHeight={59}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Join our newsletter now!`}</Text>
            <Text
              className="font-normal font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[75%]"
              compId="1063:44"
              comWidth={480}
              comHeight={32}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`Register now and get our latest updates and promos.`}</Text>
          </Column>
          <Stack
            className="lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] h-[76px] 3xl:mb-[75px] mb-[84px] 3xl:ml-[105px] ml-[117px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] 3xl:mt-[76px] mt-[85px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] w-[27%]"
            compId="1432"
            comWidth={526}
            comHeight={76}
            compLeft={117}
            compRight={0}
            compType="Stack"
          >
            <Input
              className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[15px] pb-[26.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pt-[14px] pt-[25.545px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500 text-gray_500 text-left tracking-ls1 w-[100%]"
              compId="332"
              comWidth={526}
              comHeight={76}
              compLeft={0}
              compRight={0}
              compType="EditText"
              name="Group332"
              placeholder={`Enter your email`}
            ></Input>
            <Button
              className="absolute bg-gray_800 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[2%] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
              compId="329"
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
          compId="1063:45"
          comWidth={1920}
          comHeight={585}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="bg-deep_orange_400_cf items-center justify-end w-[100%]"
            compId="1414"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-start justify-start lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
              compId="1411"
              comWidth={1920}
              comHeight={260}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] w-[20%]"
                compId="1413"
                comWidth={381}
                comHeight={246}
                compLeft={160}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[29%]"
                  compId="1063:56"
                  comWidth={112}
                  comHeight={54}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Tronix`}</Text>
                <Text
                  className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                  compId="1063:57"
                  comWidth={381}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                <Row
                  className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                  compId="1063:92"
                  comWidth={243}
                  comHeight={32}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Image
                    src={"images/img_call_2.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1063:93"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Call"
                  />
                  <Text
                    className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                    compId="1063:95"
                    comWidth={211}
                    comHeight={32}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`+1234567890`}</Text>
                </Row>
                <Row
                  className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[64%]"
                  compId="1063:96"
                  comWidth={243}
                  comHeight={32}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Image
                    src={"images/img_email_2.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1063:97"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Email"
                  />
                  <Text
                    className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                    compId="1063:99"
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
                compId="1063:58"
                comWidth={120}
                comHeight={260}
                compLeft={435}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                  compId="1063:59"
                  comWidth={120}
                  comHeight={29}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Company`}</Text>
                <Column
                  className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[67%]"
                  compId="1063:60"
                  comWidth={80}
                  comHeight={199}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[68%]"
                    compId="1063:61"
                    comWidth={54}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                    compId="1063:62"
                    comWidth={80}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Products`}</Text>
                  <Text
                    className="font-normal lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] mr-[6px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[93%]"
                    compId="1063:63"
                    comWidth={74}
                    comHeight={27}
                    compLeft={0}
                    compRight={6}
                    compType="Text"
                  >{`Contact`}</Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[50%]"
                    compId="1063:64"
                    comWidth={40}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Blog`}</Text>
                  <Text
                    className="font-normal lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[90%]"
                    compId="1063:65"
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
                compId="1063:66"
                comWidth={164}
                comHeight={217}
                compLeft={152}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[91%]"
                  compId="1063:67"
                  comWidth={150}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Information`}</Text>
                <Column
                  className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="1439"
                  comWidth={164}
                  comHeight={156}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="1063:68"
                    comWidth={164}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[65%]"
                      compId="1063:69"
                      comWidth={107}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Help Center`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                      compId="1063:70"
                      comWidth={164}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Payment Methods`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[88%]"
                      compId="1063:71"
                      comWidth={145}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Return & Refund`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[74%]"
                      compId="1063:72"
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
                compId="1063:73"
                comWidth={216}
                comHeight={117}
                compLeft={108}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[56%]"
                  compId="1063:74"
                  comWidth={122}
                  comHeight={29}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Follow Us`}</Text>
                <Column
                  className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="1440"
                  comWidth={216}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_sosmedia_15.svg"}
                    className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-cover w-[100%]"
                    compId="1063:75"
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
              compId="1063:100"
              comWidth={1600}
              comHeight={1}
              compLeft={10}
              compRight={10}
              compType="Line"
            />
            <Row
              className="items-center justify-between lg:mb-[31px] xl:mb-[36px] 2xl:mb-[40px] 3xl:mb-[48px] mb-[54px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] w-[100%]"
              compId="1412"
              comWidth={1920}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-normal lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_800 text-left w-[15%]"
                compId="1063:54"
                comWidth={287}
                comHeight={21}
                compLeft={160}
                compRight={0}
                compType="Text"
              >{`Copyright © 2021 Tronix. All Right Reseved`}</Text>
              <Image
                src={"images/img_payment_4.svg"}
                className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] mr-[160px] lg:mr-[93px] object-contain w-[7%]"
                compId="1063:47"
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

export default LoginPagePage;
