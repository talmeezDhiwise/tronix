import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { PagerIndicator } from "components/PagerIndicator";
import { List } from "components/List";
import { Line } from "components/Line";
import { Button } from "components/Button";
import { Input } from "components/Input";

const HomepageV2Page = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins mx-[auto] w-[100%]"
        compId="364:3"
        comWidth={1920}
        comHeight={7276}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="items-center justify-start w-[100%]"
          compId="556"
          comWidth={1920}
          comHeight={7276}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <header
            className="w-[100%]"
            compId="82"
            comWidth={1920}
            comHeight={120}
            compLeft={0}
            compRight={0}
            compType="Header"
          >
            <Row
              className="items-center justify-start rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[100%]"
              compId="529"
              comWidth={1920}
              comHeight={120}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-semibold xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:my-[19px] xl:my-[22px] 2xl:my-[24px] 3xl:my-[29px] my-[33px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[6%]"
                compId="1041:9"
                comWidth={112}
                comHeight={54}
                compLeft={160}
                compRight={0}
                compType="Text"
              >{`Tronix`}</Text>
              <Row
                className="bg-bluegray_100_3f items-center justify-center 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] my-[36px] rounded-radius8 w-[28%]"
                compId="527"
                comWidth={544}
                comHeight={48}
                compLeft={128}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[20%]"
                  compId="1041:14"
                  comWidth={109}
                  comHeight={27}
                  compLeft={32}
                  compRight={0}
                  compType="Text"
                >{`Search here`}</Text>
                <Image
                  src={"images/img_search_1.svg"}
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[207px] xl:ml-[236px] 2xl:ml-[266px] 3xl:ml-[319px] ml-[355px] object-contain rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  compId="1041:15"
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
                compId="629"
                comWidth={473}
                comHeight={27}
                compLeft={103}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                  compId="1041:34"
                  comWidth={54}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Home`}</Text>
                <Text
                  className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                  compId="1041:35"
                  comWidth={54}
                  comHeight={27}
                  compLeft={48}
                  compRight={0}
                  compType="Text"
                >{`About`}</Text>
                <Text
                  className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[15%]"
                  compId="1041:36"
                  comWidth={70}
                  comHeight={27}
                  compLeft={48}
                  compRight={0}
                  compType="Text"
                >{`Product`}</Text>
                <Text
                  className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[8%]"
                  compId="1041:37"
                  comWidth={40}
                  comHeight={27}
                  compLeft={48}
                  compRight={0}
                  compType="Text"
                >{`Blog`}</Text>
                <Text
                  className="cursor-pointer hover:font-normal font-normal font-nunitosans lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] my-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[13%]"
                  compId="1041:38"
                  comWidth={63}
                  comHeight={25}
                  compLeft={48}
                  compRight={0}
                  compType="Text"
                >{`Contact`}</Text>
              </Row>
              <Row
                className="items-end justify-center lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] mb-[44px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[8%]"
                compId="525"
                comWidth={160}
                comHeight={44}
                compLeft={80}
                compRight={0}
                compType="Row"
              >
                <Stack
                  className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] h-[44px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px] w-[44px]"
                  compId="584"
                  comWidth={44}
                  comHeight={44}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_shoppingbag_1.svg"}
                    className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] left-[0] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                    compId="1041:22"
                    comWidth={32}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="ShoppingBag"
                  />
                  <Column
                    className="absolute bg-deep_orange_400 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] items-center justify-start lg:py-[1px] 3xl:py-[2px] 2xl:py-[2px] xl:py-[2px] py-[3px] right-[0] rounded-radius50 top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="77"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mx-[auto] not-italic 3xl:text-fs10 text-fs12 lg:text-fs7 xl:text-fs8 2xl:text-fs9 text-gray_50 text-left w-[67%]"
                      compId="1041:29"
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
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                  compId="1041:24"
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
                  compId="1041:26"
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
            className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
            compId="560"
            comWidth={1920}
            comHeight={1112}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Stack
              className="lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] h-[480px] mx-[auto] w-[83%]"
              compId="586"
              comWidth={1600}
              comHeight={480}
              compLeft={10}
              compRight={10}
              compType="Stack"
            >
              <Image
                src={"images/img_image_5.svg"}
                className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] h-[480px] inset-[0] object-cover w-[100%]"
                compId="1041:80"
                comWidth={1600}
                comHeight={480}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="image"
              />
              <Column
                className="absolute bottom-[9%] inset-x-[0] items-center justify-start mx-[auto] w-[43%]"
                compId="1041:90"
                comWidth={680}
                comHeight={327}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold font-montserrat leading-lh text-center lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_800 w-[100%]"
                  compId="1041:93"
                  comWidth={680}
                  comHeight={136}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Better Devices for Better Life`}</Text>
                <Text
                  className="font-normal font-poppins lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 3xl:leading-lh36 leading-lh4000 lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] mx-[auto] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 w-[99%]"
                  compId="1041:94"
                  comWidth={670}
                  comHeight={80}
                  compLeft={5}
                  compRight={5}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                <PagerIndicator
                  className="h-[12px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[51px] 3xl:mt-[62px] mt-[69px] mx-[auto] w-[auto]"
                  compId="81"
                  comWidth={132}
                  comHeight={12}
                  compLeft={10}
                  compRight={10}
                  compType="PagerIndicator"
                  count={6}
                  activeCss="inline-block cursor-pointer w-[32px] h-[12px] bg-deep_orange_400 rounded-radius8"
                  activeIndex={undefined}
                  inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_50"
                  sliderRef={undefined}
                  selectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
                  unselectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
                />
              </Column>
            </Stack>
            <List
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[83%]"
              compId="1041:117"
              comWidth={1600}
              comHeight={600}
              compLeft={10}
              compRight={10}
              compType="List"
              orientation="horizontal"
            >
              <Stack
                className="lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] h-[600px] w-[100%]"
                compId="588"
                comWidth={784}
                comHeight={600}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_placeholder_3.svg"}
                  className="absolute lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] h-[600px] inset-[0] object-cover w-[100%]"
                  compId="1041:102"
                  comWidth={784}
                  comHeight={600}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="absolute bg-gray_50_cc h-[max-content] inset-[0] items-start justify-center m-[auto] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius16 w-[61%]"
                  compId="558"
                  comWidth={477}
                  comHeight={178}
                  compLeft={154}
                  compRight={153}
                  compType="Column"
                >
                  <Column
                    className="font-montserrat items-start w-[100%]"
                    compId="630"
                    comWidth={477}
                    comHeight={44}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[87%]"
                      compId="1041:107"
                      comWidth={413}
                      comHeight={44}
                      compLeft={32}
                      compRight={32}
                      compType="Text"
                    >{`PC Gaming Collection`}</Text>
                  </Column>
                  <Text
                    className="font-normal font-poppins leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[77%]"
                    compId="1041:108"
                    comWidth={368}
                    comHeight={54}
                    compLeft={54.5}
                    compRight={54.5}
                    compType="Text"
                  >
                    {
                      <>
                        {`Lorem ipsum dolor sit amet, consectetur `}
                        <br />
                        {`adipiscing elit, sed do eiusmod.`}
                      </>
                    }
                  </Text>
                </Column>
              </Stack>
              <Stack
                className="lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] h-[600px] w-[100%]"
                compId="590"
                comWidth={784}
                comHeight={600}
                compLeft={32}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_placeholder_4.svg"}
                  className="absolute lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] h-[600px] inset-[0] object-cover w-[100%]"
                  compId="1041:110"
                  comWidth={784}
                  comHeight={600}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="placeholder"
                />
                <Column
                  className="absolute bg-gray_50_cc h-[max-content] inset-[0] items-start justify-center m-[auto] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius16 w-[55%]"
                  compId="559"
                  comWidth={432}
                  comHeight={178}
                  compLeft={176}
                  compRight={176}
                  compType="Column"
                >
                  <Column
                    className="font-montserrat items-start w-[100%]"
                    compId="631"
                    comWidth={432}
                    comHeight={44}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold lg:mx-[24px] xl:mx-[28px] 2xl:mx-[31px] 3xl:mx-[37px] mx-[42px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[81%]"
                      compId="1041:115"
                      comWidth={348}
                      comHeight={44}
                      compLeft={42}
                      compRight={42}
                      compType="Text"
                    >{`Camera Collection`}</Text>
                  </Column>
                  <Text
                    className="font-normal font-poppins leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[85%]"
                    compId="1041:116"
                    comWidth={368}
                    comHeight={54}
                    compLeft={32}
                    compRight={32}
                    compType="Text"
                  >
                    {
                      <>
                        {`Lorem ipsum dolor sit amet, consectetur `}
                        <br />
                        {`adipiscing elit, sed do eiusmod.`}
                      </>
                    }
                  </Text>
                </Column>
              </Stack>
            </List>
          </Column>
          <Column
            className="font-montserrat items-start justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
            compId="568"
            comWidth={1920}
            comHeight={284}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold xl:mx-[106px] 2xl:mx-[120px] 3xl:mx-[144px] mx-[160px] lg:mx-[93px] text-center lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 w-[9%]"
              compId="1041:40"
              comWidth={173}
              comHeight={44}
              compLeft={160}
              compRight={160}
              compType="Text"
            >{`Category`}</Text>
            <Column
              className="font-poppins items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              compId="632"
              comWidth={1920}
              comHeight={208}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-start mx-[auto] w-[83%]"
                compId="1041:41"
                comWidth={1597}
                comHeight={208}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Column
                  className="items-center lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius8 w-[13%]"
                  compId="561"
                  comWidth={211}
                  comHeight={208}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_laptop_1.svg"}
                    className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                    compId="1041:43"
                    comWidth={56}
                    comHeight={56}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="Laptop"
                  />
                  <Text
                    className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[73%]"
                    compId="1041:46"
                    comWidth={154}
                    comHeight={72}
                    compLeft={10}
                    compRight={10}
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
                  className="items-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius8 w-[11%]"
                  compId="562"
                  comWidth={168}
                  comHeight={208}
                  compLeft={48}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_smartphone_1.svg"}
                    className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                    compId="1041:48"
                    comWidth={56}
                    comHeight={56}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="Smartphone"
                  />
                  <Text
                    className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[65%]"
                    compId="1041:51"
                    comWidth={110}
                    comHeight={72}
                    compLeft={10}
                    compRight={10}
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
                  className="items-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius8 w-[10%]"
                  compId="563"
                  comWidth={158}
                  comHeight={208}
                  compLeft={48}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_camera_1.svg"}
                    className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                    compId="1041:53"
                    comWidth={56}
                    comHeight={56}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="Camera"
                  />
                  <Text
                    className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[63%]"
                    compId="1041:58"
                    comWidth={100}
                    comHeight={72}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Camera`}</Text>
                </Column>
                <Column
                  className="items-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius8 w-[12%]"
                  compId="564"
                  comWidth={196}
                  comHeight={208}
                  compLeft={48}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_tvandremote_1.svg"}
                    className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                    compId="1041:60"
                    comWidth={56}
                    comHeight={56}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="TvAndRemote"
                  />
                  <Text
                    className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[71%]"
                    compId="1041:63"
                    comWidth={139}
                    comHeight={72}
                    compLeft={10}
                    compRight={10}
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
                  className="items-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius8 w-[11%]"
                  compId="565"
                  comWidth={179}
                  comHeight={208}
                  compLeft={48}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_airconditioner_1.svg"}
                    className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                    compId="1041:65"
                    comWidth={56}
                    comHeight={56}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="AirConditioner"
                  />
                  <Text
                    className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[68%]"
                    compId="1041:68"
                    comWidth={122}
                    comHeight={72}
                    compLeft={10}
                    compRight={10}
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
                  className="items-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius8 w-[13%]"
                  compId="566"
                  comWidth={200}
                  comHeight={208}
                  compLeft={48}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_speaker_1.svg"}
                    className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                    compId="1041:70"
                    comWidth={56}
                    comHeight={56}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="Speaker"
                  />
                  <Text
                    className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[72%]"
                    compId="1041:73"
                    comWidth={143}
                    comHeight={72}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Accessories`}</Text>
                </Column>
                <Column
                  className="items-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius8 w-[12%]"
                  compId="567"
                  comWidth={197}
                  comHeight={208}
                  compLeft={48}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_gamepad_1.svg"}
                    className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                    compId="1041:75"
                    comWidth={56}
                    comHeight={56}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="Gamepad"
                  />
                  <Text
                    className="font-normal leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[71%]"
                    compId="1041:78"
                    comWidth={139}
                    comHeight={72}
                    compLeft={10}
                    compRight={10}
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
            className="font-poppins items-center justify-start 3xl:mt-[117px] mt-[130px] lg:mt-[75px] xl:mt-[86px] 2xl:mt-[97px] w-[100%]"
            compId="532"
            comWidth={1920}
            comHeight={663}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compId="530"
              comWidth={1920}
              comHeight={44}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-bold font-montserrat xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[11%]"
                compId="1041:120"
                comWidth={219}
                comHeight={44}
                compLeft={160}
                compRight={0}
                compType="Text"
              >{`New Arrival`}</Text>
              <Text
                className="font-normal font-poppins xl:mr-[106px] 2xl:mr-[119px] 3xl:mr-[143px] mr-[159px] lg:mr-[92px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] not-italic text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[5%]"
                compId="1047:33"
                comWidth={92}
                comHeight={36}
                compLeft={0}
                compRight={159}
                compType="Text"
              >{`View All`}</Text>
            </Row>
            <List
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[83%]"
              compId="531"
              comWidth={1600}
              comHeight={587}
              compLeft={10}
              compRight={10}
              compType="List"
              orientation="horizontal"
            >
              <Column
                className="border border-gray_500 border-solid items-center justify-start rounded-radius32 w-[100%]"
                compId="1047:34"
                comWidth={512}
                comHeight={587}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Stack
                  className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]"
                  compId="592"
                  comWidth={512}
                  comHeight={400}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_9.svg"}
                    className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                    compId="1041:124"
                    comWidth={512}
                    comHeight={400}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Column
                    className="absolute bg-deep_orange_400 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start right-[6%] rounded-radius50 top-[8%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                    compId="1041:130"
                    comWidth={64}
                    comHeight={64}
                    compLeft={0}
                    compRight={32}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                      compId="1041:132"
                      comWidth={40}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`NEW`}</Text>
                  </Column>
                </Stack>
                <Column
                  className="items-center justify-start mx-[auto] lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[37%]"
                  compId="1041:127"
                  comWidth={191}
                  comHeight={123}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Column
                    className="items-center justify-start w-[100%]"
                    compId="1047:32"
                    comWidth={191}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1041:128"
                      comWidth={191}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Smartphone 5G`}</Text>
                    <Text
                      className="font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[51%]"
                      compId="1041:129"
                      comWidth={98}
                      comHeight={36}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`$299.00`}</Text>
                  </Column>
                  <Row
                    className="items-start justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[83%]"
                    compId="1047:31"
                    comWidth={158}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-between w-[37%]"
                      compId="1047:17"
                      comWidth={59}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_star1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1047:20"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Star1"
                      />
                      <Text
                        className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                        compId="1047:18"
                        comWidth={27}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                    </Row>
                    <Line
                      className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] opacity-op5 rotate-[90deg] w-[1px]"
                      compId="1047:30"
                      comWidth={1}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Text
                      className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                      compId="1047:29"
                      comWidth={67}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Sold 99`}</Text>
                  </Row>
                </Column>
              </Column>
              <Column
                className="border border-gray_500 border-solid items-center justify-start rounded-radius32 w-[100%]"
                compId="1047:35"
                comWidth={512}
                comHeight={587}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Stack
                  className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]"
                  compId="594"
                  comWidth={512}
                  comHeight={400}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_10.svg"}
                    className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                    compId="1047:36"
                    comWidth={512}
                    comHeight={400}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Column
                    className="absolute bg-deep_orange_400 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start right-[6%] rounded-radius50 top-[8%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                    compId="1047:50"
                    comWidth={64}
                    comHeight={64}
                    compLeft={0}
                    compRight={32}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                      compId="1047:52"
                      comWidth={40}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`NEW`}</Text>
                  </Column>
                </Stack>
                <Column
                  className="items-center justify-start mx-[auto] lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[51%]"
                  compId="1047:39"
                  comWidth={262}
                  comHeight={123}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Column
                    className="items-center justify-start w-[100%]"
                    compId="1047:40"
                    comWidth={262}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1047:41"
                      comWidth={262}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`USB Speaker Portable`}</Text>
                    <Text
                      className="font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[37%]"
                      compId="1047:42"
                      comWidth={98}
                      comHeight={36}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`$299.00`}</Text>
                  </Column>
                  <Row
                    className="items-start justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[60%]"
                    compId="1047:43"
                    comWidth={158}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-between w-[37%]"
                      compId="1047:44"
                      comWidth={59}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_star1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1047:45"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Star1"
                      />
                      <Text
                        className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                        compId="1047:46"
                        comWidth={27}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                    </Row>
                    <Line
                      className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] opacity-op5 rotate-[90deg] w-[1px]"
                      compId="1047:47"
                      comWidth={1}
                      comHeight={22}
                      compLeft={16}
                      compRight={0}
                      compType="Line"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                      compId="1047:49"
                      comWidth={67}
                      comHeight={27}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >{`Sold 99`}</Text>
                  </Row>
                </Column>
              </Column>
              <Column
                className="border border-gray_500 border-solid items-center justify-start rounded-radius32 w-[100%]"
                compId="1047:54"
                comWidth={512}
                comHeight={587}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Stack
                  className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]"
                  compId="596"
                  comWidth={512}
                  comHeight={400}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_11.svg"}
                    className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] object-cover w-[100%]"
                    compId="1047:55"
                    comWidth={512}
                    comHeight={400}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Column
                    className="absolute bg-deep_orange_400 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start right-[6%] rounded-radius50 top-[8%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                    compId="1047:69"
                    comWidth={64}
                    comHeight={64}
                    compLeft={0}
                    compRight={32}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                      compId="1047:71"
                      comWidth={40}
                      comHeight={27}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`NEW`}</Text>
                  </Column>
                </Stack>
                <Column
                  className="items-center justify-start mx-[auto] lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[31%]"
                  compId="1047:58"
                  comWidth={158}
                  comHeight={123}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Column
                    className="items-center justify-start mx-[auto] w-[69%]"
                    compId="1047:59"
                    comWidth={109}
                    comHeight={80}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1047:60"
                      comWidth={109}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Smart TV`}</Text>
                    <Text
                      className="font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] xl:mx-[3px] lg:mx-[3px] 3xl:mx-[4px] 2xl:mx-[4px] mx-[5.5px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[90%]"
                      compId="1047:61"
                      comWidth={98}
                      comHeight={36}
                      compLeft={5.5}
                      compRight={5.5}
                      compType="Text"
                    >{`$299.00`}</Text>
                  </Column>
                  <Row
                    className="items-start justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                    compId="1047:62"
                    comWidth={158}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-between w-[37%]"
                      compId="1047:63"
                      comWidth={59}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_star1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1047:64"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Star1"
                      />
                      <Text
                        className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                        compId="1047:65"
                        comWidth={27}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                    </Row>
                    <Line
                      className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] opacity-op5 rotate-[90deg] w-[1px]"
                      compId="1047:66"
                      comWidth={1}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Text
                      className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                      compId="1047:68"
                      comWidth={67}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Sold 99`}</Text>
                  </Row>
                </Column>
              </Column>
            </List>
          </Column>
          <Row
            className="bg-deep_orange_400 font-poppins items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
            compId="539"
            comWidth={1920}
            comHeight={874}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="items-start 2xl:mb-[101px] 3xl:mb-[121px] mb-[135px] lg:mb-[78px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] 2xl:mt-[102px] 3xl:mt-[122px] mt-[136px] lg:mt-[79px] xl:my-[90px] w-[19%]"
              compId="1047:329"
              comWidth={373}
              comHeight={603}
              compLeft={160}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold font-montserrat mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_800 text-left w-[79%]"
                compId="1041:157"
                comWidth={294}
                comHeight={68}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Flash Sale`}</Text>
              <Column
                className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[77%]"
                compId="1041:160"
                comWidth={288}
                comHeight={143}
                compLeft={0}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-medium lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 w-[48%]"
                  compId="1041:171"
                  comWidth={137}
                  comHeight={36}
                  compLeft={3}
                  compRight={10}
                  compType="Text"
                >{`Sale End In:`}</Text>
                <Column
                  className="lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27px] w-[100%]"
                  compId="635"
                  comWidth={288}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="lg:gap-[14px] xl:gap-[16px] 2xl:gap-[18px] 3xl:gap-[21px] gap-[24px] grid grid-cols-3 items-center justify-between w-[100%]"
                    compId="1041:161"
                    comWidth={288}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="border border-gray_800 border-solid lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] items-center lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] py-[8.5px] rounded-radius16 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                      compId="569"
                      comWidth={80}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold mx-[auto] text-center text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[13%]"
                        compId="1041:163"
                        comWidth={10}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`1`}</Text>
                      <Text
                        className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[36%]"
                        compId="1041:164"
                        comWidth={29}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Hrs`}</Text>
                    </Column>
                    <Column
                      className="border border-gray_800 border-solid lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] items-center lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] py-[8.5px] rounded-radius16 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                      compId="570"
                      comWidth={80}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold mx-[auto] text-center text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[39%]"
                        compId="1041:166"
                        comWidth={31}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`34`}</Text>
                      <Text
                        className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[40%]"
                        compId="1041:167"
                        comWidth={32}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Min`}</Text>
                    </Column>
                    <Column
                      className="border border-gray_800 border-solid lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] items-center lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] py-[8.5px] rounded-radius16 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                      compId="571"
                      comWidth={80}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold mx-[auto] text-center text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[36%]"
                        compId="1041:169"
                        comWidth={29}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`26`}</Text>
                      <Text
                        className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[41%]"
                        compId="1041:170"
                        comWidth={33}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Sec`}</Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Column
                className="font-poppins lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[100%]"
                compId="634"
                comWidth={373}
                comHeight={178}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-start justify-start w-[100%]"
                  compId="1047:5"
                  comWidth={373}
                  comHeight={178}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium leading-lh lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[100%]"
                    compId="1041:172"
                    comWidth={373}
                    comHeight={108}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Everyday discount up to 30% Off!`}</Text>
                  <Text
                    className="font-normal leading-lh lg:mr-[2px] 2xl:mr-[3px] xl:mr-[3px] 3xl:mr-[4px] mr-[5px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[99%]"
                    compId="1047:4"
                    comWidth={368}
                    comHeight={54}
                    compLeft={0}
                    compRight={5}
                    compType="Text"
                  >
                    {
                      <>
                        {`Lorem ipsum dolor sit amet, consectetur `}
                        <br />
                        {`adipiscing elit, sed do eiusmod.`}
                      </>
                    }
                  </Text>
                </Column>
              </Column>
              <Button
                className="bg-deep_orange_400 font-normal font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] mt-[42px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[40%]"
                compId="62"
                comWidth={149}
                comHeight={60}
                compLeft={0}
                compRight={10}
                compType="Button"
              >{`Shop Now`}</Button>
            </Column>
            <List
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 2xl:mb-[101px] 3xl:mb-[121px] mb-[135px] lg:mb-[78px] min-h-[auto] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] ml-[35px] 2xl:mt-[102px] 3xl:mt-[122px] mt-[136px] lg:mt-[79px] xl:my-[90px] w-[63%]"
              compId="627"
              comWidth={1219}
              comHeight={603}
              compLeft={35}
              compRight={0}
              compType="List"
              orientation="horizontal"
            >
              <Stack
                className="lg:h-[352px] xl:h-[403px] 2xl:h-[453px] 3xl:h-[544px] h-[603px] w-[100%]"
                compId="598"
                comWidth={376}
                comHeight={603}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Stack
                  className="absolute lg:h-[352px] xl:h-[403px] 2xl:h-[453px] 3xl:h-[544px] h-[603px] inset-[0] w-[100%]"
                  compId="600"
                  comWidth={376}
                  comHeight={603}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_12.svg"}
                    className="absolute lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] object-cover top-[0] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px] w-[376px]"
                    compId="1041:174"
                    comWidth={376}
                    comHeight={376}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Image
                    src={"images/img_border.svg"}
                    className="absolute lg:h-[352px] xl:h-[403px] 2xl:h-[453px] 3xl:h-[544px] h-[603px] inset-[0] object-cover rounded-radius32 w-[100%]"
                    compId="1041:178"
                    comWidth={376}
                    comHeight={603}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="border"
                  />
                </Stack>
                <Column
                  className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[83%]"
                  compId="1041:181"
                  comWidth={312}
                  comHeight={539}
                  compLeft={32}
                  compRight={32}
                  compType="Column"
                >
                  <Button
                    className="bg-purple_300 font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[38%]"
                    compId="59"
                    comWidth={120}
                    comHeight={48}
                    compLeft={10}
                    compRight={0}
                    compType="Button"
                  >{`25% OFF`}</Button>
                  <Column
                    className="items-center lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] mt-[328px] w-[100%]"
                    compId="636"
                    comWidth={312}
                    comHeight={163}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start mx-[auto] w-[79%]"
                      compId="1041:182"
                      comWidth={247}
                      comHeight={80}
                      compLeft={10}
                      compRight={10}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="637"
                        comWidth={247}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                          compId="1041:183"
                          comWidth={247}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Wireless Headphone`}</Text>
                      </Column>
                      <Row
                        className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] w-[76%]"
                        compId="1041:184"
                        comWidth={187}
                        comHeight={36}
                        compLeft={30}
                        compRight={30}
                        compType="Row"
                      >
                        <Text
                          className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[43%]"
                          compId="1041:185"
                          comWidth={80}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`$29.99`}</Text>
                        <Text
                          className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                          compId="1041:186"
                          comWidth={15}
                          comHeight={36}
                          compLeft={8}
                          compRight={0}
                          compType="Text"
                        >{`-`}</Text>
                        <Text
                          className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[41%]"
                          compId="1041:187"
                          comWidth={76}
                          comHeight={36}
                          compLeft={8}
                          compRight={0}
                          compType="Text"
                        >{`$19.99`}</Text>
                      </Row>
                    </Column>
                    <Column
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                      compId="534"
                      comWidth={312}
                      comHeight={51}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-between w-[100%]"
                        compId="533"
                        comWidth={312}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[35%]"
                          compId="1041:192"
                          comWidth={109}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Available: 10`}</Text>
                        <Text
                          className="font-normal xl:mr-[2px] lg:mr-[2px] 3xl:mr-[3px] 2xl:mr-[3px] mr-[4px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[19%]"
                          compId="1041:193"
                          comWidth={59}
                          comHeight={27}
                          compLeft={0}
                          compRight={4}
                          compType="Text"
                        >{`Sold: 5`}</Text>
                      </Row>
                      <div
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] overflow-hidden relative w-[100%]"
                        compId="84"
                        comWidth={312}
                        comHeight={16}
                        compLeft={0}
                        compRight={0}
                        compType="ProgressBar"
                        name="Group84"
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
                className="lg:h-[352px] xl:h-[403px] 2xl:h-[453px] 3xl:h-[544px] h-[603px] w-[100%]"
                compId="602"
                comWidth={376}
                comHeight={603}
                compLeft={32}
                compRight={0}
                compType="Stack"
              >
                <Stack
                  className="absolute lg:h-[352px] xl:h-[403px] 2xl:h-[453px] 3xl:h-[544px] h-[603px] inset-[0] w-[100%]"
                  compId="604"
                  comWidth={376}
                  comHeight={603}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_13.svg"}
                    className="absolute lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] object-cover top-[0] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px] w-[376px]"
                    compId="1041:195"
                    comWidth={376}
                    comHeight={376}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Image
                    src={"images/img_border.svg"}
                    className="absolute lg:h-[352px] xl:h-[403px] 2xl:h-[453px] 3xl:h-[544px] h-[603px] inset-[0] object-cover rounded-radius32 w-[100%]"
                    compId="1041:199"
                    comWidth={376}
                    comHeight={603}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="border"
                  />
                </Stack>
                <Column
                  className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[83%]"
                  compId="1041:202"
                  comWidth={312}
                  comHeight={539}
                  compLeft={32}
                  compRight={32}
                  compType="Column"
                >
                  <Button
                    className="bg-purple_300 font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[38%]"
                    compId="60"
                    comWidth={120}
                    comHeight={48}
                    compLeft={10}
                    compRight={0}
                    compType="Button"
                  >{`25% OFF`}</Button>
                  <Column
                    className="items-center lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] mt-[328px] w-[100%]"
                    compId="638"
                    comWidth={312}
                    comHeight={163}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-center justify-start mx-[auto] w-[60%]"
                      compId="1041:203"
                      comWidth={187}
                      comHeight={80}
                      compLeft={10}
                      compRight={10}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mx-[auto] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[64%]"
                        compId="1041:204"
                        comWidth={120}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Air Purifier`}</Text>
                      <Row
                        className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                        compId="1041:205"
                        comWidth={187}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[43%]"
                          compId="1041:206"
                          comWidth={80}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`$29.99`}</Text>
                        <Text
                          className="font-medium text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                          compId="1041:207"
                          comWidth={15}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`-`}</Text>
                        <Text
                          className="font-medium text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[41%]"
                          compId="1041:208"
                          comWidth={76}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`$19.99`}</Text>
                      </Row>
                    </Column>
                    <Column
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                      compId="536"
                      comWidth={312}
                      comHeight={51}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-between w-[100%]"
                        compId="535"
                        comWidth={312}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[35%]"
                          compId="1041:213"
                          comWidth={109}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Available: 15`}</Text>
                        <Text
                          className="font-normal xl:mr-[2px] lg:mr-[2px] 3xl:mr-[3px] 2xl:mr-[3px] mr-[4px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[19%]"
                          compId="1041:214"
                          comWidth={59}
                          comHeight={27}
                          compLeft={0}
                          compRight={4}
                          compType="Text"
                        >{`Sold: 11`}</Text>
                      </Row>
                      <div
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] overflow-hidden relative w-[100%]"
                        compId="85"
                        comWidth={312}
                        comHeight={16}
                        compLeft={0}
                        compRight={0}
                        compType="ProgressBar"
                        name="Group85"
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
                className="lg:h-[352px] xl:h-[403px] 2xl:h-[453px] 3xl:h-[544px] h-[603px] w-[100%]"
                compId="606"
                comWidth={403}
                comHeight={603}
                compLeft={32}
                compRight={0}
                compType="Stack"
              >
                <Stack
                  className="absolute lg:h-[352px] xl:h-[403px] 2xl:h-[453px] 3xl:h-[544px] h-[603px] left-[0] w-[93%]"
                  compId="608"
                  comWidth={376}
                  comHeight={603}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_14.svg"}
                    className="absolute lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] object-cover top-[0] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px] w-[376px]"
                    compId="1041:216"
                    comWidth={376}
                    comHeight={376}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Image
                    src={"images/img_border.svg"}
                    className="absolute lg:h-[352px] xl:h-[403px] 2xl:h-[453px] 3xl:h-[544px] h-[603px] inset-[0] object-cover rounded-radius32 w-[100%]"
                    compId="1041:220"
                    comWidth={376}
                    comHeight={603}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="border"
                  />
                </Stack>
                <Row
                  className="absolute h-[max-content] inset-y-[0] items-center justify-between my-[auto] right-[0] w-[92%]"
                  compId="610"
                  comWidth={371}
                  comHeight={539}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start w-[84%]"
                    compId="1041:223"
                    comWidth={312}
                    comHeight={539}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Button
                      className="bg-purple_300 font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[38%]"
                      compId="61"
                      comWidth={120}
                      comHeight={48}
                      compLeft={10}
                      compRight={0}
                      compType="Button"
                    >{`25% OFF`}</Button>
                    <Column
                      className="items-center lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] mt-[328px] w-[100%]"
                      compId="639"
                      comWidth={312}
                      comHeight={163}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="items-start justify-start mx-[auto] w-[63%]"
                        compId="1041:224"
                        comWidth={198}
                        comHeight={80}
                        compLeft={10}
                        compRight={10}
                        compType="Column"
                      >
                        <Column
                          className="w-[100%]"
                          compId="640"
                          comWidth={198}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                            compId="1041:225"
                            comWidth={198}
                            comHeight={36}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`Bluetooth Printer`}</Text>
                        </Column>
                        <Row
                          className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] w-[94%]"
                          compId="1041:226"
                          comWidth={187}
                          comHeight={36}
                          compLeft={5.5}
                          compRight={5.5}
                          compType="Row"
                        >
                          <Text
                            className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[43%]"
                            compId="1041:227"
                            comWidth={80}
                            comHeight={36}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`$29.99`}</Text>
                          <Text
                            className="font-medium text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                            compId="1041:228"
                            comWidth={15}
                            comHeight={36}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`-`}</Text>
                          <Text
                            className="font-medium text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[41%]"
                            compId="1041:229"
                            comWidth={76}
                            comHeight={36}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`$19.99`}</Text>
                        </Row>
                      </Column>
                      <Column
                        className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                        compId="538"
                        comWidth={312}
                        comHeight={51}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-between w-[100%]"
                          compId="537"
                          comWidth={312}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Text
                            className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[33%]"
                            compId="1041:234"
                            comWidth={104}
                            comHeight={27}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`Available: 5`}</Text>
                          <Text
                            className="font-normal lg:mr-[2px] 2xl:mr-[3px] xl:mr-[3px] 3xl:mr-[4px] mr-[5px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[19%]"
                            compId="1041:235"
                            comWidth={58}
                            comHeight={27}
                            compLeft={0}
                            compRight={5}
                            compType="Text"
                          >{`Sold: 2`}</Text>
                        </Row>
                        <div
                          className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] overflow-hidden relative w-[100%]"
                          compId="86"
                          comWidth={312}
                          comHeight={16}
                          compLeft={0}
                          compRight={0}
                          compType="ProgressBar"
                          name="Group86"
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
                    src={"images/img_arrow_4.svg"}
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mb-[142px] xl:mb-[163px] 2xl:mb-[183px] 3xl:mb-[220px] mb-[245px] lg:mt-[143px] xl:mt-[164px] 2xl:mt-[184px] 3xl:mt-[221px] mt-[246px] object-contain rounded-radius8 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                    compId="1047:6"
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
          </Row>
          <Column
            className="font-poppins items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
            compId="542"
            comWidth={1920}
            comHeight={700}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compId="540"
              comWidth={1920}
              comHeight={44}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-bold font-montserrat xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[18%]"
                compId="1047:201"
                comWidth={352}
                comHeight={44}
                compLeft={160}
                compRight={0}
                compType="Text"
              >{`Featured Products`}</Text>
              <Text
                className="font-normal font-poppins xl:mr-[105px] 2xl:mr-[118px] 3xl:mr-[142px] mr-[158px] lg:mr-[92px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] not-italic text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[5%]"
                compId="1047:320"
                comWidth={92}
                comHeight={36}
                compLeft={0}
                compRight={158}
                compType="Text"
              >{`View All`}</Text>
            </Row>
            <List
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 min-h-[auto] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] mt-[54px] mx-[auto] w-[83%]"
              compId="541"
              comWidth={1600}
              comHeight={602}
              compLeft={10}
              compRight={10}
              compType="List"
              orientation="horizontal"
            >
              <Column
                className="border border-gray_500 border-solid items-center justify-start rounded-radius32 w-[100%]"
                compId="1047:281"
                comWidth={512}
                comHeight={602}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Stack
                  className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] w-[100%]"
                  compId="612"
                  comWidth={512}
                  comHeight={376}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_15.svg"}
                    className="absolute lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] inset-[0] object-cover w-[100%]"
                    compId="1047:229"
                    comWidth={512}
                    comHeight={376}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Column
                    className="absolute right-[6%] top-[9%] w-[12%]"
                    compId="1047:278"
                    comWidth={60}
                    comHeight={129}
                    compLeft={0}
                    compRight={32}
                    compType="Column"
                  >
                    <Button
                      className="bg-blue_600 font-medium lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] py-[9.545px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[100%]"
                      compId="68"
                      comWidth={60}
                      comHeight={43}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`New`}</Button>
                    <Text
                      className="bg-purple_300 font-medium leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] px-[8.5px] py-[8px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[100%]"
                      compId="67"
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
                  className="items-start justify-start lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[49%]"
                  compId="1047:233"
                  comWidth={249}
                  comHeight={154}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="641"
                    comWidth={249}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1047:234"
                      comWidth={249}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Wireless Microphone`}</Text>
                  </Column>
                  <Row
                    className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] w-[75%]"
                    compId="1047:235"
                    comWidth={187}
                    comHeight={36}
                    compLeft={31}
                    compRight={31}
                    compType="Row"
                  >
                    <Text
                      className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[43%]"
                      compId="1047:236"
                      comWidth={80}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`$29.99`}</Text>
                    <Text
                      className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                      compId="1047:237"
                      comWidth={15}
                      comHeight={36}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`-`}</Text>
                    <Text
                      className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[41%]"
                      compId="1047:238"
                      comWidth={76}
                      comHeight={36}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`$19.99`}</Text>
                  </Row>
                  <Button
                    className="bg-deep_orange_400 font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[64%]"
                    compId="66"
                    comWidth={160}
                    comHeight={50}
                    compLeft={31}
                    compRight={31}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                </Column>
              </Column>
              <Column
                className="border border-gray_500 border-solid items-center justify-start rounded-radius32 w-[100%]"
                compId="1047:282"
                comWidth={512}
                comHeight={602}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Stack
                  className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] w-[100%]"
                  compId="614"
                  comWidth={512}
                  comHeight={376}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_16.svg"}
                    className="absolute lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] inset-[0] object-cover w-[100%]"
                    compId="1047:283"
                    comWidth={512}
                    comHeight={376}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Button
                    className="absolute bg-gray_800 font-medium lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] py-[9.545px] right-[6%] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 top-[9%] w-[18%]"
                    compId="70"
                    comWidth={93}
                    comHeight={43}
                    compLeft={0}
                    compRight={32}
                    compType="Button"
                  >{`Sold Out`}</Button>
                </Stack>
                <Column
                  className="items-center justify-start lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[57%]"
                  compId="1047:292"
                  comWidth={293}
                  comHeight={154}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                    compId="1047:293"
                    comWidth={293}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Smart Watch New Series`}</Text>
                  <Row
                    className="items-center justify-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] w-[64%]"
                    compId="1047:294"
                    comWidth={187}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Text
                      className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[43%]"
                      compId="1047:295"
                      comWidth={80}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`$29.99`}</Text>
                    <Text
                      className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                      compId="1047:296"
                      comWidth={15}
                      comHeight={36}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`-`}</Text>
                    <Text
                      className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[41%]"
                      compId="1047:297"
                      comWidth={76}
                      comHeight={36}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`$19.99`}</Text>
                  </Row>
                  <Button
                    className="bg-deep_orange_400 font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[55%]"
                    compId="69"
                    comWidth={160}
                    comHeight={50}
                    compLeft={10}
                    compRight={10}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                </Column>
              </Column>
              <Column
                className="border border-gray_500 border-solid items-center justify-start rounded-radius32 w-[100%]"
                compId="1047:311"
                comWidth={512}
                comHeight={602}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_maskgroup_17.svg"}
                  className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] object-cover rounded-tl-[32px] rounded-tr-[32px] w-[100%]"
                  compId="1047:302"
                  comWidth={512}
                  comHeight={376}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="MaskGroup"
                />
                <Text
                  className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[43%]"
                  compId="1047:312"
                  comWidth={222}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`Camera HD + Lens`}</Text>
                <Row
                  className="items-center justify-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] w-[37%]"
                  compId="1047:313"
                  comWidth={187}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Text
                    className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[43%]"
                    compId="1047:314"
                    comWidth={80}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`$29.99`}</Text>
                  <Text
                    className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                    compId="1047:315"
                    comWidth={15}
                    comHeight={36}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`-`}</Text>
                  <Text
                    className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[41%]"
                    compId="1047:316"
                    comWidth={76}
                    comHeight={36}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`$19.99`}</Text>
                </Row>
                <Button
                  className="bg-deep_orange_400 font-normal lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[31%]"
                  compId="71"
                  comWidth={160}
                  comHeight={50}
                  compLeft={10}
                  compRight={10}
                  compType="Button"
                >{`Add to Cart`}</Button>
              </Column>
            </List>
          </Column>
          <Column
            className="font-poppins items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
            compId="544"
            comWidth={1920}
            comHeight={695}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compId="543"
              comWidth={1920}
              comHeight={44}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-bold font-montserrat xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[18%]"
                compId="1047:74"
                comWidth={352}
                comHeight={44}
                compLeft={160}
                compRight={0}
                compType="Text"
              >{`Top Rated Product`}</Text>
              <Text
                className="font-normal font-poppins xl:mr-[106px] 2xl:mr-[119px] 3xl:mr-[143px] mr-[159px] lg:mr-[92px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] not-italic text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[5%]"
                compId="1047:198"
                comWidth={92}
                comHeight={36}
                compLeft={0}
                compRight={159}
                compType="Text"
              >{`View All`}</Text>
            </Row>
            <List
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-4 min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[83%]"
              compId="1047:89"
              comWidth={1600}
              comHeight={619}
              compLeft={10}
              compRight={10}
              compType="List"
              orientation="horizontal"
            >
              <Stack
                className="lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] w-[100%]"
                compId="616"
                comWidth={376}
                comHeight={619}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_border_1.svg"}
                  className="absolute lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] inset-[0] object-cover rounded-radius32 w-[100%]"
                  compId="1047:91"
                  comWidth={376}
                  comHeight={619}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="border"
                />
                <Column
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[83%]"
                  compId="1047:95"
                  comWidth={313}
                  comHeight={546}
                  compLeft={31}
                  compRight={32}
                  compType="Column"
                >
                  <Image
                    src={"images/img_image_6.svg"}
                    className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] mx-[auto] object-cover lg:w-[182px] xl:w-[208px] 2xl:w-[234px] 3xl:w-[281px] w-[313px]"
                    compId="1047:92"
                    comWidth={313}
                    comHeight={313}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Column
                    className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[67%]"
                    compId="1047:96"
                    comWidth={209}
                    comHeight={76}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1047:97"
                      comWidth={209}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Smart Mop Robot`}</Text>
                    <Text
                      className="font-medium mx-[auto] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[51%]"
                      compId="1047:98"
                      comWidth={107}
                      comHeight={36}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`$1000.00`}</Text>
                  </Column>
                  <Row
                    className="items-start justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[50%]"
                    compId="1047:170"
                    comWidth={158}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-between w-[37%]"
                      compId="1047:171"
                      comWidth={59}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_star1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1047:172"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Star1"
                      />
                      <Text
                        className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                        compId="1047:173"
                        comWidth={27}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                    </Row>
                    <Line
                      className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] opacity-op5 rotate-[90deg] w-[1px]"
                      compId="1047:174"
                      comWidth={1}
                      comHeight={22}
                      compLeft={16}
                      compRight={0}
                      compType="Line"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                      compId="1047:176"
                      comWidth={67}
                      comHeight={27}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >{`Sold 99`}</Text>
                  </Row>
                  <Button
                    className="bg-deep_orange_400 font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[51%]"
                    compId="72"
                    comWidth={160}
                    comHeight={50}
                    compLeft={10}
                    compRight={10}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                </Column>
              </Stack>
              <Stack
                className="lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] w-[100%]"
                compId="618"
                comWidth={376}
                comHeight={619}
                compLeft={32}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_border_1.svg"}
                  className="absolute lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] inset-[0] object-cover rounded-radius32 w-[100%]"
                  compId="1047:111"
                  comWidth={376}
                  comHeight={619}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="border"
                />
                <Column
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[83%]"
                  compId="1047:115"
                  comWidth={313}
                  comHeight={546}
                  compLeft={31}
                  compRight={32}
                  compType="Column"
                >
                  <Image
                    src={"images/img_image_7.svg"}
                    className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] mx-[auto] object-cover lg:w-[182px] xl:w-[208px] 2xl:w-[234px] 3xl:w-[281px] w-[313px]"
                    compId="1047:112"
                    comWidth={313}
                    comHeight={313}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Column
                    className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[48%]"
                    compId="1047:116"
                    comWidth={149}
                    comHeight={76}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1047:117"
                      comWidth={149}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Smart TV HD`}</Text>
                    <Text
                      className="font-medium lg:mx-[12px] xl:mx-[14px] 2xl:mx-[15px] 3xl:mx-[18px] mx-[21px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[72%]"
                      compId="1047:118"
                      comWidth={107}
                      comHeight={36}
                      compLeft={21}
                      compRight={21}
                      compType="Text"
                    >{`$1000.00`}</Text>
                  </Column>
                  <Row
                    className="items-start justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[50%]"
                    compId="1047:177"
                    comWidth={158}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-between w-[37%]"
                      compId="1047:178"
                      comWidth={59}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_star1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1047:179"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Star1"
                      />
                      <Text
                        className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                        compId="1047:180"
                        comWidth={27}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                    </Row>
                    <Line
                      className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] opacity-op5 rotate-[90deg] w-[1px]"
                      compId="1047:181"
                      comWidth={1}
                      comHeight={22}
                      compLeft={16}
                      compRight={0}
                      compType="Line"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                      compId="1047:183"
                      comWidth={67}
                      comHeight={27}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >{`Sold 99`}</Text>
                  </Row>
                  <Button
                    className="bg-deep_orange_400 font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[51%]"
                    compId="73"
                    comWidth={160}
                    comHeight={50}
                    compLeft={10}
                    compRight={10}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                </Column>
              </Stack>
              <Stack
                className="lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] w-[100%]"
                compId="620"
                comWidth={376}
                comHeight={619}
                compLeft={32}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_border_1.svg"}
                  className="absolute lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] inset-[0] object-cover rounded-radius32 w-[100%]"
                  compId="1047:131"
                  comWidth={376}
                  comHeight={619}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="border"
                />
                <Column
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[83%]"
                  compId="1047:135"
                  comWidth={313}
                  comHeight={546}
                  compLeft={31}
                  compRight={32}
                  compType="Column"
                >
                  <Image
                    src={"images/img_image_8.svg"}
                    className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] mx-[auto] object-cover lg:w-[182px] xl:w-[208px] 2xl:w-[234px] 3xl:w-[281px] w-[313px]"
                    compId="1047:132"
                    comWidth={313}
                    comHeight={313}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Column
                    className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[81%]"
                    compId="1047:136"
                    comWidth={252}
                    comHeight={76}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1047:137"
                      comWidth={252}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Surveillance Camera`}</Text>
                    <Text
                      className="font-medium mx-[auto] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[42%]"
                      compId="1047:138"
                      comWidth={107}
                      comHeight={36}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`$1000.00`}</Text>
                  </Column>
                  <Row
                    className="items-start justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[50%]"
                    compId="1047:184"
                    comWidth={158}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-between w-[37%]"
                      compId="1047:185"
                      comWidth={59}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_star1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1047:186"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Star1"
                      />
                      <Text
                        className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                        compId="1047:187"
                        comWidth={27}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                    </Row>
                    <Line
                      className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] opacity-op5 rotate-[90deg] w-[1px]"
                      compId="1047:188"
                      comWidth={1}
                      comHeight={22}
                      compLeft={16}
                      compRight={0}
                      compType="Line"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                      compId="1047:190"
                      comWidth={67}
                      comHeight={27}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >{`Sold 99`}</Text>
                  </Row>
                  <Button
                    className="bg-deep_orange_400 font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[51%]"
                    compId="74"
                    comWidth={160}
                    comHeight={50}
                    compLeft={10}
                    compRight={10}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                </Column>
              </Stack>
              <Stack
                className="lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] w-[100%]"
                compId="622"
                comWidth={376}
                comHeight={619}
                compLeft={32}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_border_1.svg"}
                  className="absolute lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] inset-[0] object-cover rounded-radius32 w-[100%]"
                  compId="1047:151"
                  comWidth={376}
                  comHeight={619}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="border"
                />
                <Column
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[83%]"
                  compId="1047:155"
                  comWidth={313}
                  comHeight={546}
                  compLeft={31}
                  compRight={32}
                  compType="Column"
                >
                  <Image
                    src={"images/img_image_9.svg"}
                    className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] mx-[auto] object-cover lg:w-[182px] xl:w-[208px] 2xl:w-[234px] 3xl:w-[281px] w-[313px]"
                    compId="1047:152"
                    comWidth={313}
                    comHeight={313}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Column
                    className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[45%]"
                    compId="1047:156"
                    comWidth={141}
                    comHeight={76}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1047:157"
                      comWidth={141}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Joystick Pro`}</Text>
                    <Text
                      className="font-medium xl:mx-[11px] 2xl:mx-[12px] 3xl:mx-[15px] mx-[17px] lg:mx-[9px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[76%]"
                      compId="1047:158"
                      comWidth={107}
                      comHeight={36}
                      compLeft={17}
                      compRight={17}
                      compType="Text"
                    >{`$1000.00`}</Text>
                  </Column>
                  <Row
                    className="items-start justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[50%]"
                    compId="1047:191"
                    comWidth={158}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Row
                      className="items-center justify-between w-[37%]"
                      compId="1047:192"
                      comWidth={59}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_star1.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1047:193"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Star1"
                      />
                      <Text
                        className="font-normal lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                        compId="1047:194"
                        comWidth={27}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`5.0`}</Text>
                    </Row>
                    <Line
                      className="bg-bluegray_100 lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] opacity-op5 rotate-[90deg] w-[1px]"
                      compId="1047:195"
                      comWidth={1}
                      comHeight={22}
                      compLeft={16}
                      compRight={0}
                      compType="Line"
                    />
                    <Text
                      className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                      compId="1047:197"
                      comWidth={67}
                      comHeight={27}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >{`Sold 99`}</Text>
                  </Row>
                  <Button
                    className="bg-deep_orange_400 font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[51%]"
                    compId="75"
                    comWidth={160}
                    comHeight={50}
                    compLeft={10}
                    compRight={10}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                </Column>
              </Stack>
            </List>
          </Column>
          <Row
            className="items-center justify-center xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] opacity-op5 w-[83%]"
            compId="1041:253"
            comWidth={1600}
            comHeight={72}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Text
              className="font-normal font-playfairdisplay xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] not-italic lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[12%]"
              compId="1041:254"
              comWidth={189}
              comHeight={64}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`SimSong`}</Text>
            <Text
              className="font-medium font-poppins lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[9%]"
              compId="1041:255"
              comWidth={143}
              comHeight={72}
              compLeft={80}
              compRight={0}
              compType="Text"
            >{`Harps`}</Text>
            <Text
              className="font-normal font-vidaloka lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] xl:my-[4px] lg:my-[4px] 2xl:my-[5px] 3xl:my-[6px] my-[7px] not-italic lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[11%]"
              compId="1041:256"
              comWidth={169}
              comHeight={58}
              compLeft={80}
              compRight={0}
              compType="Text"
            >{`DiskVan`}</Text>
            <Text
              className="font-bold font-montserrat lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6.5px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[7%]"
              compId="1041:257"
              comWidth={111}
              comHeight={59}
              compLeft={80}
              compRight={0}
              compType="Text"
            >{`Ikon`}</Text>
            <Text
              className="font-bold font-nunito lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] 2xl:my-[2px] xl:my-[2px] lg:my-[2px] my-[3.5px] 3xl:my-[3px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[9%]"
              compId="1041:258"
              comWidth={145}
              comHeight={65}
              compLeft={80}
              compRight={0}
              compType="Text"
            >{`Strons`}</Text>
            <Text
              className="font-bold font-inter lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] xl:my-[4px] lg:my-[4px] 2xl:my-[5px] 3xl:my-[6px] my-[7px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[11%]"
              compId="1041:259"
              comWidth={183}
              comHeight={58}
              compLeft={80}
              compRight={0}
              compType="Text"
            >{`Cocoon`}</Text>
          </Row>
          <Row
            className="items-center justify-between xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] w-[84%]"
            compId="832:734"
            comWidth={1610}
            comHeight={44}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Text
              className="font-bold font-montserrat lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[5%]"
              compId="832:735"
              comWidth={88}
              comHeight={44}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Blog`}</Text>
            <Text
              className="font-normal font-poppins xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] not-italic text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[6%]"
              compId="1047:323"
              comWidth={92}
              comHeight={36}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`View All`}</Text>
          </Row>
          <Row
            className="font-poppins items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
            compId="576"
            comWidth={1920}
            comHeight={544}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="items-start justify-start lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] w-[36%]"
              compId="832:738"
              comWidth={688}
              comHeight={517}
              compLeft={150}
              compRight={0}
              compType="Column"
            >
              <Column
                className="w-[100%]"
                compId="644"
                comWidth={688}
                comHeight={370}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <div
                  className="bg-gray_400 lg:h-[216px] xl:h-[247px] 2xl:h-[278px] 3xl:h-[334px] h-[370px] rounded-radius16 w-[100%]"
                  compId="832:739"
                  comWidth={688}
                  comHeight={370}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
              </Column>
              <Column
                className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[66%]"
                compId="832:740"
                comWidth={455}
                comHeight={115}
                compLeft={0}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-medium leading-lh lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                  compId="832:741"
                  comWidth={455}
                  comHeight={72}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`We Offer the Best Quality Product to Our Customers`}</Text>
                <Text
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[42%]"
                  compId="832:742"
                  comWidth={191}
                  comHeight={27}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >
                  <span className="text-gray_500 font-poppins">
                    <>{`by `}</>
                  </span>
                  <span className="text-deep_orange_400 font-poppins">
                    <>{`Admin`}</>
                  </span>
                  <span className="text-gray_500 font-poppins">
                    <>{`, 12 Jan 2021`}</>
                  </span>
                </Text>
              </Column>
            </Column>
            <List
              className="gap-[0] min-h-[auto] 2xl:ml-[103px] 3xl:ml-[124px] ml-[138px] lg:ml-[80px] xl:ml-[92px] w-[41%]"
              compId="575"
              comWidth={794}
              comHeight={544}
              compLeft={138}
              compRight={0}
              compType="List"
              orientation="vertical"
            >
              <Row
                className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                compId="832:743"
                comWidth={794}
                comHeight={160}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] w-[65%]"
                  compId="832:745"
                  comWidth={516}
                  comHeight={115}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium leading-lh lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                    compId="832:746"
                    comWidth={516}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`We Offer the Best Quality Product to Our Customers`}</Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[37%]"
                    compId="832:747"
                    comWidth={191}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    <span className="text-gray_500 font-poppins">
                      <>{`by `}</>
                    </span>
                    <span className="text-deep_orange_400 font-poppins">
                      <>{`Admin`}</>
                    </span>
                    <span className="text-gray_500 font-poppins">
                      <>{`, 12 Jan 2021`}</>
                    </span>
                  </Text>
                </Column>
                <div
                  className="bg-gray_400 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] rounded-radius16 w-[31%]"
                  compId="832:744"
                  comWidth={243}
                  comHeight={160}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
              </Row>
              <Row
                className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                compId="832:748"
                comWidth={794}
                comHeight={160}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] w-[65%]"
                  compId="832:750"
                  comWidth={516}
                  comHeight={115}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium leading-lh lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                    compId="832:751"
                    comWidth={516}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`We Offer the Best Quality Product to Our Customers`}</Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[37%]"
                    compId="832:752"
                    comWidth={191}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    <span className="text-gray_500 font-poppins">
                      <>{`by `}</>
                    </span>
                    <span className="text-deep_orange_400 font-poppins">
                      <>{`Admin`}</>
                    </span>
                    <span className="text-gray_500 font-poppins">
                      <>{`, 12 Jan 2021`}</>
                    </span>
                  </Text>
                </Column>
                <div
                  className="bg-gray_400 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] rounded-radius16 w-[31%]"
                  compId="832:749"
                  comWidth={243}
                  comHeight={160}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
              </Row>
              <Row
                className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                compId="832:753"
                comWidth={794}
                comHeight={160}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] w-[65%]"
                  compId="832:755"
                  comWidth={516}
                  comHeight={115}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium leading-lh lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                    compId="832:756"
                    comWidth={516}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`We Offer the Best Quality Product to Our Customers`}</Text>
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[37%]"
                    compId="832:757"
                    comWidth={191}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >
                    <span className="text-gray_500 font-poppins">
                      <>{`by `}</>
                    </span>
                    <span className="text-deep_orange_400 font-poppins">
                      <>{`Admin`}</>
                    </span>
                    <span className="text-gray_500 font-poppins">
                      <>{`, 12 Jan 2021`}</>
                    </span>
                  </Text>
                </Column>
                <div
                  className="bg-gray_400 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] rounded-radius16 w-[31%]"
                  compId="832:754"
                  comWidth={243}
                  comHeight={160}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
              </Row>
            </List>
          </Row>
          <Stack
            className="font-poppins h-[1014px] lg:h-[592px] xl:h-[677px] 2xl:h-[762px] 3xl:h-[914px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
            compId="624"
            comWidth={1920}
            comHeight={1014}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Column
              className="absolute bg-deep_orange_400 items-center justify-start top-[0] w-[100%]"
              compId="1040:241"
              comWidth={1920}
              comHeight={429}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold font-montserrat mt-[103px] lg:mt-[60px] xl:mt-[68px] 2xl:mt-[77px] 3xl:mt-[92px] mx-[auto] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[33%]"
                compId="1040:242"
                comWidth={637}
                comHeight={59}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Join our newsletter now!`}</Text>
              <Text
                className="font-normal font-poppins xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[25%]"
                compId="1040:243"
                comWidth={480}
                comHeight={32}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Register now and get our latest updates and promos.`}</Text>
              <Stack
                className="font-poppins lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] lg:mb-[54px] xl:mb-[62px] 2xl:mb-[69px] 3xl:mb-[83px] mb-[93px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] mt-[46px] mx-[auto] w-[28%]"
                compId="626"
                comWidth={534}
                comHeight={80}
                compLeft={10}
                compRight={10}
                compType="Stack"
              >
                <Input
                  className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic xl:pb-[19px] 2xl:pb-[21px] 3xl:pb-[25px] pb-[28.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] xl:pt-[18px] 2xl:pt-[20px] 3xl:pt-[24px] pt-[27.545px] lg:py-[16px] rounded-radius16 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_800 text-gray_800 text-left tracking-ls1 w-[100%]"
                  compId="83"
                  comWidth={534}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Group83"
                  placeholder={`Enter your email`}
                ></Input>
                <Button
                  className="absolute bg-gray_800 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[3%] rounded-radius16 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
                  compId="76"
                  comWidth={105}
                  comHeight={60}
                  compLeft={0}
                  compRight={16}
                  compType="Button"
                >{`Join`}</Button>
              </Stack>
            </Column>
            <Column
              className="absolute bg-deep_orange_400_cf inset-[0] items-center justify-end w-[100%]"
              compId="547"
              comWidth={1920}
              comHeight={1014}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-start lg:mt-[292px] xl:mt-[334px] 2xl:mt-[376px] 3xl:mt-[452px] mt-[502px] w-[100%]"
                compId="545"
                comWidth={1920}
                comHeight={260}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start justify-start lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] mb-[22px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] w-[20%]"
                  compId="1040:254"
                  comWidth={381}
                  comHeight={238}
                  compLeft={160}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[29%]"
                    compId="1040:255"
                    comWidth={112}
                    comHeight={54}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Tronix`}</Text>
                  <Text
                    className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                    compId="1040:256"
                    comWidth={381}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                  <Image
                    src={"images/img_sosmedia_2.svg"}
                    className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] object-contain w-[57%]"
                    compId="1040:257"
                    comWidth={216}
                    comHeight={56}
                    compLeft={0}
                    compRight={10}
                    compType="Image"
                    alt="sosmedia"
                  />
                </Column>
                <List
                  className="font-montserrat 3xl:gap-[114px] gap-[127px] lg:gap-[74px] xl:gap-[84px] 2xl:gap-[95px] grid grid-cols-2 min-h-[auto] lg:ml-[252px] xl:ml-[288px] 2xl:ml-[324px] 3xl:ml-[389px] ml-[432px] w-[21%]"
                  compId="628"
                  comWidth={411}
                  comHeight={260}
                  compLeft={432}
                  compRight={0}
                  compType="List"
                  orientation="horizontal"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="1040:273"
                    comWidth={120}
                    comHeight={260}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1040:274"
                      comWidth={120}
                      comHeight={29}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Company`}</Text>
                    <Column
                      className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[67%]"
                      compId="1040:275"
                      comWidth={80}
                      comHeight={199}
                      compLeft={0}
                      compRight={10}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[68%]"
                        compId="1040:276"
                        comWidth={54}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`About`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                        compId="1040:277"
                        comWidth={80}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Products`}</Text>
                      <Text
                        className="font-normal lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] mr-[6px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[93%]"
                        compId="1040:278"
                        comWidth={74}
                        comHeight={27}
                        compLeft={0}
                        compRight={6}
                        compType="Text"
                      >{`Contact`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[50%]"
                        compId="1040:279"
                        comWidth={40}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Blog`}</Text>
                      <Text
                        className="font-normal lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[90%]"
                        compId="1040:280"
                        comWidth={72}
                        comHeight={27}
                        compLeft={0}
                        compRight={8}
                        compType="Text"
                      >{`Careers`}</Text>
                    </Column>
                  </Column>
                  <Column
                    className="items-start justify-start lg:mb-[25px] xl:mb-[28px] 2xl:mb-[32px] 3xl:mb-[38px] mb-[43px] w-[100%]"
                    compId="1040:281"
                    comWidth={164}
                    comHeight={217}
                    compLeft={127}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[91%]"
                      compId="1040:282"
                      comWidth={150}
                      comHeight={29}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Information`}</Text>
                    <Column
                      className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                      compId="645"
                      comWidth={164}
                      comHeight={156}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="items-start justify-start w-[100%]"
                        compId="1040:283"
                        comWidth={164}
                        comHeight={156}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[65%]"
                          compId="1040:284"
                          comWidth={107}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Help Center`}</Text>
                        <Text
                          className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                          compId="1040:285"
                          comWidth={164}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Payment Methods`}</Text>
                        <Text
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[88%]"
                          compId="1040:286"
                          comWidth={145}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Return & Refund`}</Text>
                        <Text
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[74%]"
                          compId="1040:287"
                          comWidth={122}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Privacy Policy`}</Text>
                      </Column>
                    </Column>
                  </Column>
                </List>
                <Column
                  className="font-montserrat items-start justify-start 3xl:mb-[111px] mb-[124px] lg:mb-[72px] xl:mb-[82px] 2xl:mb-[93px] 3xl:ml-[117px] ml-[130px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[97px] w-[13%]"
                  compId="1040:288"
                  comWidth={243}
                  comHeight={136}
                  compLeft={130}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[41%]"
                    compId="1040:289"
                    comWidth={100}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Contact`}</Text>
                  <Column
                    className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="646"
                    comWidth={243}
                    comHeight={75}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="1040:290"
                      comWidth={243}
                      comHeight={75}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-start w-[100%]"
                        compId="1040:291"
                        comWidth={243}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_call_2.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="1040:292"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Call"
                        />
                        <Text
                          className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                          compId="1040:294"
                          comWidth={211}
                          comHeight={32}
                          compLeft={8}
                          compRight={0}
                          compType="Text"
                        >{`+1234567890`}</Text>
                      </Row>
                      <Row
                        className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                        compId="1040:295"
                        comWidth={243}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_email_2.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="1040:296"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Email"
                        />
                        <Text
                          className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                          compId="1040:298"
                          comWidth={211}
                          comHeight={27}
                          compLeft={8}
                          compRight={0}
                          compType="Text"
                        >{`support@tronix.com`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Row>
              <Line
                className="bg-gray_500 h-[1px] 3xl:mt-[114px] mt-[127px] lg:mt-[74px] xl:mt-[84px] 2xl:mt-[95px] mx-[auto] w-[83%]"
                compId="1041:260"
                comWidth={1600}
                comHeight={1}
                compLeft={10}
                compRight={10}
                compType="Line"
              />
              <Row
                className="items-center justify-between lg:mb-[31px] xl:mb-[36px] 2xl:mb-[40px] 3xl:mb-[48px] mb-[54px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] w-[100%]"
                compId="546"
                comWidth={1920}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_800 text-left w-[15%]"
                  compId="1040:253"
                  comWidth={287}
                  comHeight={21}
                  compLeft={160}
                  compRight={0}
                  compType="Text"
                >{`Copyright © 2021 Tronix. All Right Reseved`}</Text>
                <Image
                  src={"images/img_payment_1.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] mr-[160px] lg:mr-[93px] object-contain w-[7%]"
                  compId="1040:246"
                  comWidth={128}
                  comHeight={32}
                  compLeft={0}
                  compRight={160}
                  compType="Image"
                  alt="payment"
                />
              </Row>
            </Column>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default HomepageV2Page;
