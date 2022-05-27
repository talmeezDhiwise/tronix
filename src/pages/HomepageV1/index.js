import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { PagerIndicator } from "components/PagerIndicator";
import { List } from "components/List";
import { RatingBar } from "components/RatingBar";
import { Input } from "components/Input";

const HomepageV1Page = () => {
  return (
    <>
      <Column
        className="bg-gray_50 font-poppins items-center justify-start mx-[auto] w-[100%]"
        compId="309:14"
        comWidth={1920}
        comHeight={8290}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="45"
          comWidth={1920}
          comHeight={207}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Column
            className="items-center justify-start w-[100%]"
            compId="1004:11"
            comWidth={1920}
            comHeight={207}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compId="1004:38"
              comWidth={1920}
              comHeight={60}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_sosmedia.svg"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain w-[10%]"
                compId="1004:51"
                comWidth={192}
                comHeight={24}
                compLeft={160}
                compRight={0}
                compType="Image"
                alt="sosmedia"
              />
              <Row
                className="items-center justify-center xl:mb-[10px] 3xl:mb-[14px] mb-[16px] xl:mr-[112px] 2xl:mr-[126px] 3xl:mr-[151px] mr-[168px] lg:mr-[98px] xl:mt-[11px] 3xl:mt-[15px] mt-[17px] 2xl:my-[12px] lg:my-[9px] w-[22%]"
                compId="1004:40"
                comWidth={427}
                comHeight={27}
                compLeft={0}
                compRight={168}
                compType="Row"
              >
                <Row
                  className="items-start justify-start w-[40%]"
                  compId="1004:42"
                  comWidth={172}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_call.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1004:43"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Call"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[77%]"
                    compId="1004:45"
                    comWidth={132}
                    comHeight={27}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >{`+12 345 6789 0`}</Text>
                </Row>
                <Row
                  className="items-start justify-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[52%]"
                  compId="1004:47"
                  comWidth={223}
                  comHeight={27}
                  compLeft={32}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_email.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="1004:48"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Email"
                  />
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[82%]"
                    compId="1004:50"
                    comWidth={183}
                    comHeight={27}
                    compLeft={16}
                    compRight={0}
                    compType="Text"
                  >{`support@tronix.com`}</Text>
                </Row>
              </Row>
            </Row>
            <Column
              className="items-center justify-start rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[100%]"
              compId="365"
              comWidth={1920}
              comHeight={120}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Line
                className="bg-gray_500 h-[1px] mx-[auto] opacity-op25 w-[83%]"
                compId="1004:37"
                comWidth={1598}
                comHeight={1}
                compLeft={10}
                compRight={10}
                compType="Line"
              />
              <Row
                className="items-start justify-start lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] w-[100%]"
                compId="364"
                comWidth={1920}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-poppins font-semibold xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[6%]"
                  compId="1004:14"
                  comWidth={112}
                  comHeight={54}
                  compLeft={160}
                  compRight={0}
                  compType="Text"
                >{`Tronix`}</Text>
                <Image
                  src={"images/img_search.svg"}
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[126px] xl:ml-[144px] 2xl:ml-[162px] 3xl:ml-[194px] ml-[216px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain rounded-radius8 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  compId="1004:34"
                  comWidth={48}
                  comHeight={48}
                  compLeft={216}
                  compRight={0}
                  compType="Image"
                  alt="search"
                />
                <Row
                  className="bg-bluegray_100_3f font-poppins items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] rounded-radius8 w-[34%]"
                  compId="361"
                  comWidth={648}
                  comHeight={48}
                  compLeft={32}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[17%]"
                    compId="1004:22"
                    comWidth={109}
                    comHeight={27}
                    compLeft={32}
                    compRight={0}
                    compType="Text"
                  >{`Search here`}</Text>
                  <Image
                    src={"images/img_search_1.svg"}
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[267px] xl:ml-[306px] 2xl:ml-[344px] 3xl:ml-[413px] ml-[459px] object-contain rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                    compId="1004:23"
                    comWidth={48}
                    comHeight={48}
                    compLeft={459}
                    compRight={0}
                    compType="Image"
                    alt="search"
                  />
                </Row>
                <Stack
                  className="font-poppins lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] h-[44px] 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] 2xl:ml-[102px] 3xl:ml-[122px] ml-[136px] lg:ml-[79px] xl:ml-[90px] mt-[1px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px] w-[44px]"
                  compId="432"
                  comWidth={44}
                  comHeight={44}
                  compLeft={136}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_shoppingbag.svg"}
                    className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] left-[0] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                    compId="1004:29"
                    comWidth={32}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="ShoppingBag"
                  />
                  <Column
                    className="absolute bg-deep_orange_400 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] items-center justify-start lg:py-[1px] 3xl:py-[2px] 2xl:py-[2px] xl:py-[2px] py-[3px] right-[0] rounded-radius50 top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="38"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mx-[auto] not-italic 3xl:text-fs10 text-fs12 lg:text-fs7 xl:text-fs8 2xl:text-fs9 text-gray_50 text-left w-[67%]"
                      compId="1006:2"
                      comWidth={16}
                      comHeight={18}
                      compLeft={4}
                      compRight={4}
                      compType="Text"
                    >{`99`}</Text>
                  </Column>
                </Stack>
                <Image
                  src={"images/img_email_1.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] 2xl:my-[10px] 3xl:my-[12px] my-[14px] lg:my-[8px] xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                  compId="1004:31"
                  comWidth={32}
                  comHeight={32}
                  compLeft={20}
                  compRight={0}
                  compType="Image"
                  alt="Email"
                />
                <Text
                  className="font-normal font-nunitosans lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 3xl:leading-lh36 leading-lh4000 lg:ml-[39px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] ml-[67px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] not-italic text-deep_orange_400 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left underline w-[3%]"
                  compId="1004:17"
                  comWidth={56}
                  comHeight={40}
                  compLeft={67}
                  compRight={0}
                  compType="Text"
                >{`Sign In`}</Text>
                <Button
                  className="bg-deep_orange_400 font-normal font-poppins lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[8%]"
                  compId="1"
                  comWidth={149}
                  comHeight={60}
                  compLeft={40}
                  compRight={0}
                  compType="Button"
                >{`Sign Up`}</Button>
              </Row>
            </Column>
            <Row
              className="items-center justify-center mx-[auto] w-[25%]"
              compId="1004:63"
              comWidth={473}
              comHeight={27}
              compLeft={10}
              compRight={10}
              compType="Row"
            >
              <Text
                className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                compId="1004:64"
                comWidth={54}
                comHeight={27}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Home`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                compId="1004:65"
                comWidth={54}
                comHeight={27}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`About`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[15%]"
                compId="1004:66"
                comWidth={70}
                comHeight={27}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`Product`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[8%]"
                compId="1004:67"
                comWidth={40}
                comHeight={27}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`Blog`}</Text>
              <Text
                className="cursor-pointer hover:font-normal font-normal font-nunitosans lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] my-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[13%]"
                compId="1004:68"
                comWidth={63}
                comHeight={25}
                compLeft={48}
                compRight={0}
                compType="Text"
              >{`Contact`}</Text>
            </Row>
          </Column>
        </header>
        <Stack
          className="lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] h-[480px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] mx-[auto] w-[86%]"
          compId="434"
          comWidth={1646}
          comHeight={480}
          compLeft={10}
          compRight={10}
          compType="Stack"
        >
          <Stack
            className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] h-[480px] inset-[0] w-[100%]"
            compId="436"
            comWidth={1646}
            comHeight={480}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Image
              src={"images/img_image.svg"}
              className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] h-[480px] inset-x-[1%] inset-y-[0] object-contain w-[97%]"
              compId="1004:72"
              comWidth={1600}
              comHeight={480}
              compLeft={23}
              compRight={23}
              compType="Image"
              alt="image"
            />
            <Image
              src={"images/img_arrow.svg"}
              className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] inset-y-[0] my-[auto] object-contain right-[0] rounded-radius8 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
              compId="1004:87"
              comWidth={48}
              comHeight={48}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="arrow"
            />
            <Image
              src={"images/img_arrow_1.svg"}
              className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] inset-y-[0] left-[0] my-[auto] object-contain rounded-radius8 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
              compId="1004:90"
              comWidth={48}
              comHeight={48}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="arrow"
            />
          </Stack>
          <Column
            className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[8%] my-[auto] w-[46%]"
            compId="1004:82"
            comWidth={762}
            comHeight={385}
            compLeft={126}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold font-montserrat leading-lh mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_800 text-left w-[89%]"
              compId="1004:85"
              comWidth={680}
              comHeight={136}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`Better Devices for Better Life`}</Text>
            <Text
              className="font-normal font-poppins lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 3xl:leading-lh36 leading-lh4000 mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[71%]"
              compId="1004:86"
              comWidth={544}
              comHeight={80}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
            <Button
              className="bg-deep_orange_400 font-normal font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] not-italic lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
              compId="3"
              comWidth={149}
              comHeight={60}
              compLeft={0}
              compRight={10}
              compType="Button"
            >{`Shop Now`}</Button>
            <Column
              className="items-end lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] w-[100%]"
              compId="501"
              comWidth={762}
              comHeight={12}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <PagerIndicator
                className="h-[12px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] w-[auto]"
                compId="42"
                comWidth={132}
                comHeight={12}
                compLeft={10}
                compRight={0}
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
          </Column>
        </Stack>
        <Column
          className="font-montserrat items-start justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
          compId="402"
          comWidth={1920}
          comHeight={128}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Text
            className="font-bold xl:mx-[104px] 2xl:mx-[117px] 3xl:mx-[141px] mx-[157px] lg:mx-[91px] text-center lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 w-[9%]"
            compId="1006:4"
            comWidth={173}
            comHeight={44}
            compLeft={157}
            compRight={157}
            compType="Text"
          >{`Category`}</Text>
          <Column
            className="font-poppins items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
            compId="502"
            comWidth={1920}
            comHeight={52}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-start mx-[auto] w-[83%]"
              compId="1020:116"
              comWidth={1600}
              comHeight={52}
              compLeft={10}
              compRight={10}
              compType="Row"
            >
              <Row
                className="border border-gray_500 border-solid items-center justify-start rounded-radius8 w-[15%]"
                compId="367"
                comWidth={243}
                comHeight={52}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_laptop.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] 3xl:ml-[10px] ml-[11.5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                  compId="1020:110"
                  comWidth={32}
                  comHeight={32}
                  compLeft={11.5}
                  compRight={0}
                  compType="Image"
                  alt="Laptop"
                />
                <Text
                  className="font-normal ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] 3xl:my-[11px] my-[12.5px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[73%]"
                  compId="1006:5"
                  comWidth={178}
                  comHeight={27}
                  compLeft={10}
                  compRight={0}
                  compType="Text"
                >{`Computer & Laptop`}</Text>
              </Row>
              <Row
                className="border border-gray_500 border-solid items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] rounded-radius8 w-[13%]"
                compId="368"
                comWidth={209}
                comHeight={52}
                compLeft={32}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_smartphone.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] 3xl:ml-[10px] ml-[11.5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                  compId="1020:113"
                  comWidth={32}
                  comHeight={32}
                  compLeft={11.5}
                  compRight={0}
                  compType="Image"
                  alt="Smartphone"
                />
                <Text
                  className="font-normal ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] 3xl:mr-[10px] mr-[11.5px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:my-[11px] my-[12.5px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[69%]"
                  compId="1006:8"
                  comWidth={144}
                  comHeight={27}
                  compLeft={10}
                  compRight={11.5}
                  compType="Text"
                >{`Mobile & Tablet`}</Text>
              </Row>
              <Row
                className="border border-gray_500 border-solid items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] rounded-radius8 w-[9%]"
                compId="369"
                comWidth={139}
                comHeight={52}
                compLeft={32}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_camera.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] ml-[11px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                  compId="1020:93"
                  comWidth={32}
                  comHeight={32}
                  compLeft={11}
                  compRight={0}
                  compType="Image"
                  alt="Camera"
                />
                <Text
                  className="font-normal ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] mr-[11px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mx-[9px] 3xl:my-[11px] my-[12.5px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[54%]"
                  compId="1006:10"
                  comWidth={75}
                  comHeight={27}
                  compLeft={10}
                  compRight={11}
                  compType="Text"
                >{`Camera`}</Text>
              </Row>
              <Row
                className="border border-gray_500 border-solid items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] rounded-radius8 w-[13%]"
                compId="370"
                comWidth={206}
                comHeight={52}
                compLeft={32}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_tvandremote.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] 3xl:ml-[10px] ml-[11.5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                  compId="1020:98"
                  comWidth={32}
                  comHeight={32}
                  compLeft={11.5}
                  compRight={0}
                  compType="Image"
                  alt="TvAndRemote"
                />
                <Text
                  className="font-normal ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] 3xl:mr-[10px] mr-[11.5px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:my-[11px] my-[12.5px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[68%]"
                  compId="1006:12"
                  comWidth={141}
                  comHeight={27}
                  compLeft={10}
                  compRight={11.5}
                  compType="Text"
                >{`TV & Smart Box`}</Text>
              </Row>
              <Row
                className="border border-gray_500 border-solid items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] rounded-radius8 w-[13%]"
                compId="371"
                comWidth={215}
                comHeight={52}
                compLeft={32}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_airconditioner.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] 3xl:ml-[10px] ml-[11.5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                  compId="1020:90"
                  comWidth={32}
                  comHeight={32}
                  compLeft={11.5}
                  compRight={0}
                  compType="Image"
                  alt="AirConditioner"
                />
                <Text
                  className="font-normal ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] 3xl:mr-[10px] mr-[11.5px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:my-[11px] my-[12.5px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[70%]"
                  compId="1008:3"
                  comWidth={150}
                  comHeight={27}
                  compLeft={10}
                  compRight={11.5}
                  compType="Text"
                >{`Home Appliance`}</Text>
              </Row>
              <Row
                className="border border-gray_500 border-solid items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] rounded-radius8 w-[11%]"
                compId="372"
                comWidth={172}
                comHeight={52}
                compLeft={32}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_speaker.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] ml-[11px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                  compId="1020:101"
                  comWidth={32}
                  comHeight={32}
                  compLeft={11}
                  compRight={0}
                  compType="Image"
                  alt="Speaker"
                />
                <Text
                  className="font-normal ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] mr-[11px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mx-[9px] 3xl:my-[11px] my-[12.5px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[63%]"
                  compId="1008:5"
                  comWidth={108}
                  comHeight={27}
                  compLeft={10}
                  compRight={11}
                  compType="Text"
                >{`Accessories`}</Text>
              </Row>
              <Row
                className="border border-gray_500 border-solid items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] rounded-radius8 w-[14%]"
                compId="373"
                comWidth={224}
                comHeight={52}
                compLeft={32}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_gamepad.svg"}
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] 3xl:ml-[10px] ml-[11.5px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                  compId="1020:104"
                  comWidth={32}
                  comHeight={32}
                  compLeft={11.5}
                  compRight={0}
                  compType="Image"
                  alt="Gamepad"
                />
                <Text
                  className="font-normal ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] 3xl:mr-[10px] mr-[11.5px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:my-[11px] my-[12.5px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[71%]"
                  compId="1008:7"
                  comWidth={159}
                  comHeight={27}
                  compLeft={10}
                  compRight={11.5}
                  compType="Text"
                >{`Other Categories`}</Text>
              </Row>
            </Row>
          </Column>
        </Column>
        <Column
          className="font-montserrat items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] w-[83%]"
          compId="1014:4"
          comWidth={1600}
          comHeight={860}
          compLeft={10}
          compRight={10}
          compType="Column"
        >
          <Column
            className="items-start justify-start mx-[auto] w-[30%]"
            compId="1014:2"
            comWidth={480}
            comHeight={156}
            compLeft={10}
            compRight={10}
            compType="Column"
          >
            <Text
              className="font-bold lg:ml-[44px] xl:ml-[51px] 2xl:ml-[57px] 3xl:ml-[69px] ml-[77px] lg:mr-[36px] xl:mr-[42px] 2xl:mr-[47px] 3xl:mr-[56px] mr-[63px] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_800 text-left w-[71%]"
              compId="326:37"
              comWidth={340}
              comHeight={68}
              compLeft={77}
              compRight={63}
              compType="Text"
            >{`New Arrival`}</Text>
            <Column
              className="font-poppins lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
              compId="503"
              comWidth={480}
              comHeight={64}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[100%]"
                compId="810:28"
                comWidth={480}
                comHeight={64}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
            </Column>
          </Column>
          <List
            className="font-poppins lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 min-h-[auto] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
            compId="1014:3"
            comWidth={1600}
            comHeight={624}
            compLeft={0}
            compRight={0}
            compType="List"
            orientation="horizontal"
          >
            <Column
              className="border border-gray_500 border-solid items-center justify-start rounded-radius32 w-[100%]"
              compId="1009:10"
              comWidth={512}
              comHeight={624}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Stack
                className="lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] h-[480px] w-[100%]"
                compId="438"
                comWidth={512}
                comHeight={480}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_maskgroup.svg"}
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] h-[480px] inset-[0] object-cover w-[100%]"
                  compId="329:69"
                  comWidth={512}
                  comHeight={480}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="MaskGroup"
                />
                <Column
                  className="absolute bg-deep_orange_400 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start right-[6%] rounded-radius50 top-[7%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                  compId="810:35"
                  comWidth={64}
                  comHeight={64}
                  compLeft={0}
                  compRight={32}
                  compType="Column"
                >
                  <Text
                    className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                    compId="810:34"
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
                compId="329:66"
                comWidth={191}
                comHeight={80}
                compLeft={10}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                  compId="329:67"
                  comWidth={191}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Smartphone 5G`}</Text>
                <Text
                  className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[31%]"
                  compId="329:68"
                  comWidth={60}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
            </Column>
            <Column
              className="border border-gray_500 border-solid items-center justify-start rounded-radius32 w-[100%]"
              compId="1009:11"
              comWidth={512}
              comHeight={624}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Stack
                className="lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] h-[480px] w-[100%]"
                compId="440"
                comWidth={512}
                comHeight={480}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_maskgroup_1.svg"}
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] h-[480px] inset-[0] object-cover w-[100%]"
                  compId="1009:12"
                  comWidth={512}
                  comHeight={480}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="MaskGroup"
                />
                <Column
                  className="absolute bg-deep_orange_400 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start right-[6%] rounded-radius50 top-[7%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                  compId="1009:18"
                  comWidth={64}
                  comHeight={64}
                  compLeft={0}
                  compRight={32}
                  compType="Column"
                >
                  <Text
                    className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                    compId="1009:20"
                    comWidth={40}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`NEW`}</Text>
                </Column>
              </Stack>
              <Column
                className="items-center justify-start mx-[auto] lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[21%]"
                compId="1009:15"
                comWidth={109}
                comHeight={80}
                compLeft={10}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                  compId="1009:16"
                  comWidth={109}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Smart TV`}</Text>
                <Text
                  className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[55%]"
                  compId="1009:17"
                  comWidth={60}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
            </Column>
            <Column
              className="border border-gray_500 border-solid items-center justify-start rounded-radius32 w-[100%]"
              compId="1009:22"
              comWidth={512}
              comHeight={624}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Stack
                className="lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] h-[480px] w-[100%]"
                compId="442"
                comWidth={512}
                comHeight={480}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_maskgroup_2.svg"}
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] h-[480px] inset-[0] object-cover w-[100%]"
                  compId="1009:23"
                  comWidth={512}
                  comHeight={480}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="MaskGroup"
                />
                <Column
                  className="absolute bg-deep_orange_400 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] items-center justify-start right-[6%] rounded-radius50 top-[7%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                  compId="1009:29"
                  comWidth={64}
                  comHeight={64}
                  compLeft={0}
                  compRight={32}
                  compType="Column"
                >
                  <Text
                    className="font-normal lg:mb-[10px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[11px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] mx-[auto] xl:my-[12px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[63%]"
                    compId="1009:31"
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
                compId="1009:26"
                comWidth={262}
                comHeight={80}
                compLeft={10}
                compRight={10}
                compType="Column"
              >
                <Text
                  className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                  compId="1009:27"
                  comWidth={262}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`USB Speaker Portable`}</Text>
                <Text
                  className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[23%]"
                  compId="1009:28"
                  comWidth={60}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`$299`}</Text>
              </Column>
            </Column>
          </List>
        </Column>
        <Column
          className="font-montserrat items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] w-[83%]"
          compId="1020:89"
          comWidth={1600}
          comHeight={1020}
          compLeft={10}
          compRight={10}
          compType="Column"
        >
          <Column
            className="mx-[auto] w-[34%]"
            compId="1015:6"
            comWidth={547}
            comHeight={156}
            compLeft={10}
            compRight={10}
            compType="Column"
          >
            <Text
              className="font-bold lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_800 text-left w-[100%]"
              compId="1015:7"
              comWidth={547}
              comHeight={68}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Featured Products`}</Text>
            <Column
              className="font-poppins items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
              compId="504"
              comWidth={547}
              comHeight={64}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[88%]"
                compId="1015:8"
                comWidth={480}
                comHeight={64}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
            </Column>
          </Column>
          <Row
            className="font-poppins lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 items-center justify-between lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
            compId="415"
            comWidth={1600}
            comHeight={784}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Stack
              className="lg:h-[458px] xl:h-[524px] 2xl:h-[589px] 3xl:h-[707px] h-[784px] lg:w-[457px] xl:w-[523px] 2xl:w-[588px] 3xl:w-[706px] w-[784px]"
              compId="444"
              comWidth={784}
              comHeight={784}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Column
                className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[6%] w-[65%]"
                compId="1015:14"
                comWidth={512}
                comHeight={530}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-start w-[100%]"
                  compId="505"
                  comWidth={512}
                  comHeight={54}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal 2xl:ml-[52px] 3xl:ml-[63px] ml-[70px] 2xl:mr-[51px] 3xl:mr-[62px] mr-[69px] lg:mx-[40px] xl:mx-[46px] not-italic lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[73%]"
                    compId="1015:15"
                    comWidth={373}
                    comHeight={54}
                    compLeft={70}
                    compRight={69}
                    compType="Text"
                  >{`Wireless Microphone`}</Text>
                </Column>
                <Row
                  className="items-center justify-center 2xl:ml-[122px] 3xl:ml-[146px] ml-[163px] lg:ml-[95px] 2xl:mr-[121px] 3xl:mr-[145px] mr-[162px] lg:mr-[94px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] xl:mx-[108px] w-[37%]"
                  compId="1020:30"
                  comWidth={187}
                  comHeight={36}
                  compLeft={163}
                  compRight={162}
                  compType="Row"
                >
                  <Text
                    className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[43%]"
                    compId="1015:16"
                    comWidth={80}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`$29.99`}</Text>
                  <Text
                    className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                    compId="1020:28"
                    comWidth={15}
                    comHeight={36}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`-`}</Text>
                  <Text
                    className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[41%]"
                    compId="1020:29"
                    comWidth={76}
                    comHeight={36}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`$19.99`}</Text>
                </Row>
                <Image
                  src={"images/img_maskgroup_3.svg"}
                  className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] object-cover w-[100%]"
                  compId="1015:11"
                  comWidth={512}
                  comHeight={400}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="MaskGroup"
                />
              </Column>
              <Row
                className="absolute border border-gray_500 border-solid lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 lg:h-[458px] xl:h-[524px] 2xl:h-[589px] 3xl:h-[707px] h-[784px] inset-[0] items-start justify-center rounded-radius32 w-[100%]"
                compId="1020:25"
                comWidth={784}
                comHeight={784}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="border border-gray_500 border-solid 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center justify-center lg:mb-[31px] xl:mb-[36px] 2xl:mb-[40px] 3xl:mb-[48px] mb-[54px] lg:mt-[355px] xl:mt-[406px] 2xl:mt-[457px] 3xl:mt-[549px] mt-[610px] xl:py-[10px] 2xl:py-[11px] 3xl:py-[13px] py-[15.5px] lg:py-[9px] rounded-radius32 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                  compId="403"
                  comWidth={120}
                  comHeight={120}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mx-[auto] text-center text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 w-[18%]"
                    compId="1020:12"
                    comWidth={21}
                    comHeight={54}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`2`}</Text>
                  <Text
                    className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[43%]"
                    compId="1020:13"
                    comWidth={52}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Hours`}</Text>
                </Column>
                <Column
                  className="border border-gray_500 border-solid 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center justify-center lg:mb-[31px] xl:mb-[36px] 2xl:mb-[40px] 3xl:mb-[48px] mb-[54px] lg:mt-[355px] xl:mt-[406px] 2xl:mt-[457px] 3xl:mt-[549px] mt-[610px] xl:py-[10px] 2xl:py-[11px] 3xl:py-[13px] py-[15.5px] lg:py-[9px] rounded-radius32 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                  compId="404"
                  comWidth={120}
                  comHeight={120}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mx-[auto] text-center text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 w-[31%]"
                    compId="1020:15"
                    comWidth={37}
                    comHeight={54}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`16`}</Text>
                  <Text
                    className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[59%]"
                    compId="1020:16"
                    comWidth={71}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Minutes`}</Text>
                </Column>
                <Column
                  className="border border-gray_500 border-solid 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center justify-center lg:mb-[31px] xl:mb-[36px] 2xl:mb-[40px] 3xl:mb-[48px] mb-[54px] lg:mt-[355px] xl:mt-[406px] 2xl:mt-[457px] 3xl:mt-[549px] mt-[610px] xl:py-[10px] 2xl:py-[11px] 3xl:py-[13px] py-[15.5px] lg:py-[9px] rounded-radius32 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                  compId="405"
                  comWidth={120}
                  comHeight={120}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mx-[auto] text-center text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 w-[33%]"
                    compId="1020:18"
                    comWidth={40}
                    comHeight={54}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`27`}</Text>
                  <Text
                    className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[65%]"
                    compId="1020:19"
                    comWidth={78}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Seconds`}</Text>
                </Column>
              </Row>
            </Stack>
            <List
              className="gap-[0] lg:h-[458px] xl:h-[524px] 2xl:h-[589px] 3xl:h-[707px] h-[784px] min-h-[auto] lg:w-[457px] xl:w-[523px] 2xl:w-[588px] 3xl:w-[706px] w-[784px]"
              compId="414"
              comWidth={784}
              comHeight={784}
              compLeft={0}
              compRight={0}
              compType="List"
              orientation="vertical"
            >
              <Stack
                className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                compId="446"
                comWidth={784}
                comHeight={376}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Column
                  className="absolute items-start justify-start right-[11%] top-[13%] w-[37%]"
                  compId="1015:36"
                  comWidth={293}
                  comHeight={160}
                  compLeft={0}
                  compRight={83}
                  compType="Column"
                >
                  <Button
                    className="bg-deep_orange_400 font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[61%]"
                    compId="16"
                    comWidth={180}
                    comHeight={48}
                    compLeft={0}
                    compRight={10}
                    compType="Button"
                  >{`Limited Offer`}</Button>
                  <Text
                    className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                    compId="1015:37"
                    comWidth={293}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Smart Watch New Series`}</Text>
                  <Row
                    className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[64%]"
                    compId="1020:47"
                    comWidth={187}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Row"
                  >
                    <Text
                      className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[43%]"
                      compId="1020:48"
                      comWidth={80}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`$29.99`}</Text>
                    <Text
                      className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                      compId="1020:49"
                      comWidth={15}
                      comHeight={36}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`-`}</Text>
                    <Text
                      className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[41%]"
                      compId="1020:50"
                      comWidth={76}
                      comHeight={36}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`$19.99`}</Text>
                  </Row>
                </Column>
                <Stack
                  className="absolute lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] inset-[0] w-[100%]"
                  compId="448"
                  comWidth={784}
                  comHeight={376}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_4.svg"}
                    className="absolute lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] left-[0] object-contain lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px] w-[376px]"
                    compId="1015:33"
                    comWidth={376}
                    comHeight={376}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Row
                    className="absolute border border-gray_500 border-solid lg:gap-[14px] xl:gap-[16px] 2xl:gap-[18px] 3xl:gap-[21px] gap-[24px] grid grid-cols-3 inset-[0] items-start justify-center rounded-radius32 w-[100%]"
                    compId="1020:51"
                    comWidth={784}
                    comHeight={376}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="border border-gray_500 border-solid lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] items-center justify-center lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mt-[149px] xl:mt-[170px] 2xl:mt-[192px] 3xl:mt-[230px] mt-[256px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] py-[8.5px] rounded-radius16 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                      compId="406"
                      comWidth={80}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold mx-[auto] text-center text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[18%]"
                        compId="1020:53"
                        comWidth={14}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`2`}</Text>
                      <Text
                        className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[36%]"
                        compId="1020:54"
                        comWidth={29}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Hrs`}</Text>
                    </Column>
                    <Column
                      className="border border-gray_500 border-solid lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] items-center justify-center lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mt-[149px] xl:mt-[170px] 2xl:mt-[192px] 3xl:mt-[230px] mt-[256px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] py-[8.5px] rounded-radius16 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                      compId="407"
                      comWidth={80}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold mx-[auto] text-center text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[31%]"
                        compId="1020:56"
                        comWidth={25}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`16`}</Text>
                      <Text
                        className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[40%]"
                        compId="1020:57"
                        comWidth={32}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Min`}</Text>
                    </Column>
                    <Column
                      className="border border-gray_500 border-solid lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] items-center justify-center lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mt-[149px] xl:mt-[170px] 2xl:mt-[192px] 3xl:mt-[230px] mt-[256px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] py-[8.5px] rounded-radius16 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                      compId="408"
                      comWidth={80}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold mx-[auto] text-center text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[34%]"
                        compId="1020:59"
                        comWidth={27}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`27`}</Text>
                      <Text
                        className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[41%]"
                        compId="1020:60"
                        comWidth={33}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Sec`}</Text>
                    </Column>
                  </Row>
                </Stack>
              </Stack>
              <Stack
                className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]"
                compId="450"
                comWidth={784}
                comHeight={376}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Column
                  className="absolute items-start justify-start right-[20%] top-[13%] w-[28%]"
                  compId="1020:70"
                  comWidth={222}
                  comHeight={160}
                  compLeft={0}
                  compRight={154}
                  compType="Column"
                >
                  <Button
                    className="bg-deep_orange_400 font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[81%]"
                    compId="21"
                    comWidth={180}
                    comHeight={48}
                    compLeft={0}
                    compRight={10}
                    compType="Button"
                  >{`Limited Offer`}</Button>
                  <Text
                    className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                    compId="1020:71"
                    comWidth={222}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Camera HD + Lens`}</Text>
                  <Row
                    className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[84%]"
                    compId="1020:72"
                    comWidth={187}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Row"
                  >
                    <Text
                      className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[43%]"
                      compId="1020:73"
                      comWidth={80}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`$29.99`}</Text>
                    <Text
                      className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                      compId="1020:74"
                      comWidth={15}
                      comHeight={36}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`-`}</Text>
                    <Text
                      className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[41%]"
                      compId="1020:75"
                      comWidth={76}
                      comHeight={36}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`$19.99`}</Text>
                  </Row>
                </Column>
                <Stack
                  className="absolute lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] inset-[0] w-[100%]"
                  compId="452"
                  comWidth={784}
                  comHeight={376}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_5.svg"}
                    className="absolute lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] left-[0] object-contain lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px] w-[376px]"
                    compId="1020:66"
                    comWidth={376}
                    comHeight={376}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="MaskGroup"
                  />
                  <Row
                    className="absolute border border-gray_500 border-solid lg:gap-[14px] xl:gap-[16px] 2xl:gap-[18px] 3xl:gap-[21px] gap-[24px] grid grid-cols-3 inset-[0] items-start justify-center rounded-radius32 w-[100%]"
                    compId="1020:77"
                    comWidth={784}
                    comHeight={376}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="border border-gray_500 border-solid lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] items-center justify-center lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mt-[149px] xl:mt-[170px] 2xl:mt-[192px] 3xl:mt-[230px] mt-[256px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] py-[8.5px] rounded-radius16 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                      compId="410"
                      comWidth={80}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold mx-[auto] text-center text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[18%]"
                        compId="1020:79"
                        comWidth={14}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`2`}</Text>
                      <Text
                        className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[36%]"
                        compId="1020:80"
                        comWidth={29}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Hrs`}</Text>
                    </Column>
                    <Column
                      className="border border-gray_500 border-solid lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] items-center justify-center lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mt-[149px] xl:mt-[170px] 2xl:mt-[192px] 3xl:mt-[230px] mt-[256px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] py-[8.5px] rounded-radius16 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                      compId="411"
                      comWidth={80}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold mx-[auto] text-center text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[31%]"
                        compId="1020:82"
                        comWidth={25}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`16`}</Text>
                      <Text
                        className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[40%]"
                        compId="1020:83"
                        comWidth={32}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Min`}</Text>
                    </Column>
                    <Column
                      className="border border-gray_500 border-solid lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] items-center justify-center lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mt-[149px] xl:mt-[170px] 2xl:mt-[192px] 3xl:mt-[230px] mt-[256px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] py-[8.5px] rounded-radius16 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                      compId="412"
                      comWidth={80}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold mx-[auto] text-center text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[34%]"
                        compId="1020:85"
                        comWidth={27}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`27`}</Text>
                      <Text
                        className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[41%]"
                        compId="1020:86"
                        comWidth={33}
                        comHeight={27}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Sec`}</Text>
                    </Column>
                  </Row>
                </Stack>
              </Stack>
            </List>
          </Row>
        </Column>
        <Column
          className="items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] w-[83%]"
          compId="1026:7"
          comWidth={1600}
          comHeight={836}
          compLeft={10}
          compRight={10}
          compType="Column"
        >
          <Text
            className="font-bold font-montserrat mx-[auto] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_800 text-left w-[28%]"
            compId="1026:8"
            comWidth={452}
            comHeight={68}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`Our Collections`}</Text>
          <Text
            className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[30%]"
            compId="1026:9"
            comWidth={480}
            comHeight={64}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
          <List
            className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 min-h-[auto] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
            compId="376"
            comWidth={1600}
            comHeight={600}
            compLeft={0}
            compRight={0}
            compType="List"
            orientation="horizontal"
          >
            <Stack
              className="lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] h-[600px] w-[100%]"
              compId="454"
              comWidth={784}
              comHeight={600}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_placeholder.svg"}
                className="absolute lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] h-[600px] inset-[0] object-cover w-[100%]"
                compId="631:25"
                comWidth={784}
                comHeight={600}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Column
                className="absolute bg-gray_50_cc h-[max-content] inset-[0] items-start justify-center m-[auto] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius16 w-[61%]"
                compId="416"
                comWidth={477}
                comHeight={178}
                compLeft={154}
                compRight={153}
                compType="Column"
              >
                <Column
                  className="font-montserrat items-start w-[100%]"
                  compId="506"
                  comWidth={477}
                  comHeight={44}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[87%]"
                    compId="810:99"
                    comWidth={413}
                    comHeight={44}
                    compLeft={32}
                    compRight={32}
                    compType="Text"
                  >{`PC Gaming Collection`}</Text>
                </Column>
                <Text
                  className="font-normal font-poppins leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[77%]"
                  compId="810:98"
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
              compId="456"
              comWidth={784}
              comHeight={600}
              compLeft={32}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_placeholder_1.svg"}
                className="absolute lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] h-[600px] inset-[0] object-cover w-[100%]"
                compId="1034:3"
                comWidth={784}
                comHeight={600}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="placeholder"
              />
              <Column
                className="absolute bg-gray_50_cc h-[max-content] inset-[0] items-start justify-center m-[auto] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius16 w-[55%]"
                compId="417"
                comWidth={432}
                comHeight={178}
                compLeft={176}
                compRight={176}
                compType="Column"
              >
                <Column
                  className="font-montserrat items-start w-[100%]"
                  compId="507"
                  comWidth={432}
                  comHeight={44}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:mx-[24px] xl:mx-[28px] 2xl:mx-[31px] 3xl:mx-[37px] mx-[42px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[81%]"
                    compId="1034:8"
                    comWidth={348}
                    comHeight={44}
                    compLeft={42}
                    compRight={42}
                    compType="Text"
                  >{`Camera Collection`}</Text>
                </Column>
                <Text
                  className="font-normal font-poppins leading-lh xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 w-[85%]"
                  compId="1034:9"
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
          className="font-montserrat items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
          compId="386"
          comWidth={1920}
          comHeight={714}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="items-center justify-between mx-[auto] w-[83%]"
            compId="1026:34"
            comWidth={1600}
            comHeight={68}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Text
              className="font-bold lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_800 text-left w-[18%]"
              compId="1024:207"
              comWidth={294}
              comHeight={68}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Flash Sale`}</Text>
            <Row
              className="items-center justify-between my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] w-[15%]"
              compId="498"
              comWidth={240}
              comHeight={48}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_arrow_2.svg"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                compId="1026:35"
                comWidth={48}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Arrow"
              />
              <PagerIndicator
                className="h-[12px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] w-[auto]"
                compId="43"
                comWidth={112}
                comHeight={12}
                compLeft={0}
                compRight={0}
                compType="PagerIndicator"
                count={6}
                activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-deep_orange_400"
                activeIndex={undefined}
                inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-bluegray_100"
                sliderRef={undefined}
                selectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
                unselectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
              />
              <Image
                src={"images/img_arrow_3.svg"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                compId="1026:45"
                comWidth={48}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Arrow"
              />
            </Row>
          </Row>
          <Row
            className="font-poppins items-center justify-start lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] mt-[43px] w-[100%]"
            compId="385"
            comWidth={1920}
            comHeight={603}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="bg-deep_orange_400 items-start xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] rounded-radius32 w-[20%]"
              compId="1029:13"
              comWidth={376}
              comHeight={603}
              compLeft={160}
              compRight={0}
              compType="Column"
            >
              <Column
                className="items-start lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] w-[100%]"
                compId="508"
                comWidth={376}
                comHeight={54}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium lg:mx-[36px] xl:mx-[41px] 2xl:mx-[46px] 3xl:mx-[55px] mx-[62px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_50 text-left w-[67%]"
                  compId="1024:206"
                  comWidth={251}
                  comHeight={54}
                  compLeft={62}
                  compRight={62}
                  compType="Text"
                >{`Up to 30% Off!`}</Text>
              </Column>
              <Text
                className="font-bold lg:mt-[191px] xl:mt-[219px] 2xl:mt-[246px] 3xl:mt-[296px] mt-[329px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_50 w-[37%]"
                compId="1029:12"
                comWidth={139}
                comHeight={36}
                compLeft={44}
                compRight={44}
                compType="Text"
              >{`Sale End In:`}</Text>
              <Row
                className="lg:gap-[14px] xl:gap-[16px] 2xl:gap-[18px] 3xl:gap-[21px] gap-[24px] grid grid-cols-3 items-center justify-start lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[77%]"
                compId="1029:2"
                comWidth={288}
                comHeight={80}
                compLeft={44}
                compRight={44}
                compType="Row"
              >
                <Column
                  className="border border-gray_50 border-solid lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] items-center lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] py-[8.5px] rounded-radius16 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                  compId="418"
                  comWidth={80}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_50 w-[13%]"
                    compId="1029:4"
                    comWidth={10}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`1`}</Text>
                  <Text
                    className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[36%]"
                    compId="1029:5"
                    comWidth={29}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Hrs`}</Text>
                </Column>
                <Column
                  className="border border-gray_50 border-solid lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] items-center lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] py-[8.5px] rounded-radius16 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                  compId="419"
                  comWidth={80}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_50 w-[39%]"
                    compId="1029:7"
                    comWidth={31}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`34`}</Text>
                  <Text
                    className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[40%]"
                    compId="1029:8"
                    comWidth={32}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Min`}</Text>
                </Column>
                <Column
                  className="border border-gray_50 border-solid lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] items-center lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] py-[8.5px] rounded-radius16 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                  compId="420"
                  comWidth={80}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_50 w-[36%]"
                    compId="1029:10"
                    comWidth={29}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`26`}</Text>
                  <Text
                    className="font-normal mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[41%]"
                    compId="1029:11"
                    comWidth={33}
                    comHeight={27}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Sec`}</Text>
                </Column>
              </Row>
            </Column>
            <List
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 min-h-[auto] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[62%]"
              compId="493"
              comWidth={1192}
              comHeight={603}
              compLeft={32}
              compRight={0}
              compType="List"
              orientation="horizontal"
            >
              <Stack
                className="lg:h-[352px] xl:h-[403px] 2xl:h-[453px] 3xl:h-[544px] h-[603px] w-[100%]"
                compId="458"
                comWidth={376}
                comHeight={603}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Stack
                  className="absolute lg:h-[352px] xl:h-[403px] 2xl:h-[453px] 3xl:h-[544px] h-[603px] inset-[0] w-[100%]"
                  compId="460"
                  comWidth={376}
                  comHeight={603}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_6.svg"}
                    className="absolute lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] object-cover top-[0] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px] w-[376px]"
                    compId="1024:172"
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
                    compId="1024:182"
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
                  compId="1024:218"
                  comWidth={312}
                  comHeight={539}
                  compLeft={32}
                  compRight={32}
                  compType="Column"
                >
                  <Button
                    className="bg-deep_orange_400 font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[38%]"
                    compId="30"
                    comWidth={120}
                    comHeight={48}
                    compLeft={10}
                    compRight={0}
                    compType="Button"
                  >{`25% OFF`}</Button>
                  <Column
                    className="items-center lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] mt-[328px] w-[100%]"
                    compId="509"
                    comWidth={312}
                    comHeight={163}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start mx-[auto] w-[79%]"
                      compId="1024:176"
                      comWidth={247}
                      comHeight={80}
                      compLeft={10}
                      compRight={10}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="510"
                        comWidth={247}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                          compId="1024:177"
                          comWidth={247}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Wireless Headphone`}</Text>
                      </Column>
                      <Row
                        className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] w-[76%]"
                        compId="1024:178"
                        comWidth={187}
                        comHeight={36}
                        compLeft={30}
                        compRight={30}
                        compType="Row"
                      >
                        <Text
                          className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[43%]"
                          compId="1024:179"
                          comWidth={80}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`$29.99`}</Text>
                        <Text
                          className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                          compId="1024:180"
                          comWidth={15}
                          comHeight={36}
                          compLeft={8}
                          compRight={0}
                          compType="Text"
                        >{`-`}</Text>
                        <Text
                          className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[41%]"
                          compId="1024:181"
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
                      compId="378"
                      comWidth={312}
                      comHeight={51}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-between w-[100%]"
                        compId="377"
                        comWidth={312}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[35%]"
                          compId="1024:212"
                          comWidth={109}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Available: 10`}</Text>
                        <Text
                          className="font-normal xl:mr-[2px] lg:mr-[2px] 3xl:mr-[3px] 2xl:mr-[3px] mr-[4px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[19%]"
                          compId="1024:213"
                          comWidth={59}
                          comHeight={27}
                          compLeft={0}
                          compRight={4}
                          compType="Text"
                        >{`Sold: 5`}</Text>
                      </Row>
                      <div
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] overflow-hidden relative w-[100%]"
                        compId="47"
                        comWidth={312}
                        comHeight={16}
                        compLeft={0}
                        compRight={0}
                        compType="ProgressBar"
                        name="Group47"
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
                compId="462"
                comWidth={376}
                comHeight={603}
                compLeft={32}
                compRight={0}
                compType="Stack"
              >
                <Stack
                  className="absolute lg:h-[352px] xl:h-[403px] 2xl:h-[453px] 3xl:h-[544px] h-[603px] inset-[0] w-[100%]"
                  compId="464"
                  comWidth={376}
                  comHeight={603}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_7.svg"}
                    className="absolute lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] object-cover top-[0] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px] w-[376px]"
                    compId="1024:222"
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
                    compId="1024:226"
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
                  compId="1024:229"
                  comWidth={312}
                  comHeight={539}
                  compLeft={32}
                  compRight={32}
                  compType="Column"
                >
                  <Button
                    className="bg-deep_orange_400 font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[38%]"
                    compId="31"
                    comWidth={120}
                    comHeight={48}
                    compLeft={10}
                    compRight={0}
                    compType="Button"
                  >{`25% OFF`}</Button>
                  <Column
                    className="items-center lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] mt-[328px] w-[100%]"
                    compId="511"
                    comWidth={312}
                    comHeight={163}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-center justify-start mx-[auto] w-[60%]"
                      compId="1024:230"
                      comWidth={187}
                      comHeight={80}
                      compLeft={10}
                      compRight={10}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mx-[auto] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[64%]"
                        compId="1024:231"
                        comWidth={120}
                        comHeight={36}
                        compLeft={10}
                        compRight={10}
                        compType="Text"
                      >{`Air Purifier`}</Text>
                      <Row
                        className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]"
                        compId="1024:232"
                        comWidth={187}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[43%]"
                          compId="1024:233"
                          comWidth={80}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`$29.99`}</Text>
                        <Text
                          className="font-medium text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                          compId="1024:234"
                          comWidth={15}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`-`}</Text>
                        <Text
                          className="font-medium text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[41%]"
                          compId="1024:235"
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
                      compId="380"
                      comWidth={312}
                      comHeight={51}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-between w-[100%]"
                        compId="379"
                        comWidth={312}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[35%]"
                          compId="1024:240"
                          comWidth={109}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Available: 15`}</Text>
                        <Text
                          className="font-normal xl:mr-[2px] lg:mr-[2px] 3xl:mr-[3px] 2xl:mr-[3px] mr-[4px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[19%]"
                          compId="1024:241"
                          comWidth={59}
                          comHeight={27}
                          compLeft={0}
                          compRight={4}
                          compType="Text"
                        >{`Sold: 11`}</Text>
                      </Row>
                      <div
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] overflow-hidden relative w-[100%]"
                        compId="48"
                        comWidth={312}
                        comHeight={16}
                        compLeft={0}
                        compRight={0}
                        compType="ProgressBar"
                        name="Group48"
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
                compId="466"
                comWidth={376}
                comHeight={603}
                compLeft={32}
                compRight={0}
                compType="Stack"
              >
                <Stack
                  className="absolute lg:h-[352px] xl:h-[403px] 2xl:h-[453px] 3xl:h-[544px] h-[603px] inset-[0] w-[100%]"
                  compId="468"
                  comWidth={376}
                  comHeight={603}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_maskgroup_8.svg"}
                    className="absolute lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] h-[376px] object-cover top-[0] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px] w-[376px]"
                    compId="1024:243"
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
                    compId="1024:247"
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
                  compId="1024:250"
                  comWidth={312}
                  comHeight={539}
                  compLeft={32}
                  compRight={32}
                  compType="Column"
                >
                  <Button
                    className="bg-deep_orange_400 font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] 3xl:py-[10px] py-[12.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[38%]"
                    compId="32"
                    comWidth={120}
                    comHeight={48}
                    compLeft={10}
                    compRight={0}
                    compType="Button"
                  >{`25% OFF`}</Button>
                  <Column
                    className="items-center lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] mt-[328px] w-[100%]"
                    compId="512"
                    comWidth={312}
                    comHeight={163}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start mx-[auto] w-[63%]"
                      compId="1024:251"
                      comWidth={198}
                      comHeight={80}
                      compLeft={10}
                      compRight={10}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="513"
                        comWidth={198}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                          compId="1024:252"
                          comWidth={198}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Bluetooth Printer`}</Text>
                      </Column>
                      <Row
                        className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] w-[94%]"
                        compId="1024:253"
                        comWidth={187}
                        comHeight={36}
                        compLeft={5.5}
                        compRight={5.5}
                        compType="Row"
                      >
                        <Text
                          className="font-normal line-through not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[43%]"
                          compId="1024:254"
                          comWidth={80}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`$29.99`}</Text>
                        <Text
                          className="font-medium text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[8%]"
                          compId="1024:255"
                          comWidth={15}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`-`}</Text>
                        <Text
                          className="font-medium text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[41%]"
                          compId="1024:256"
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
                      compId="382"
                      comWidth={312}
                      comHeight={51}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-between w-[100%]"
                        compId="381"
                        comWidth={312}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[33%]"
                          compId="1024:261"
                          comWidth={104}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Available: 5`}</Text>
                        <Text
                          className="font-normal lg:mr-[2px] 2xl:mr-[3px] xl:mr-[3px] 3xl:mr-[4px] mr-[5px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[19%]"
                          compId="1024:262"
                          comWidth={58}
                          comHeight={27}
                          compLeft={0}
                          compRight={5}
                          compType="Text"
                        >{`Sold: 2`}</Text>
                      </Row>
                      <div
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] overflow-hidden relative w-[100%]"
                        compId="49"
                        comWidth={312}
                        comHeight={16}
                        compLeft={0}
                        compRight={0}
                        compType="ProgressBar"
                        name="Group49"
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
            </List>
          </Row>
        </Column>
        <Column
          className="font-montserrat items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
          compId="387"
          comWidth={1920}
          comHeight={767}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="items-center justify-between mx-[auto] w-[83%]"
            compId="1038:138"
            comWidth={1600}
            comHeight={68}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Text
              className="font-bold lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_800 text-left w-[34%]"
              compId="810:226"
              comWidth={548}
              comHeight={68}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Top Rated Product`}</Text>
            <Row
              className="items-center justify-between my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] w-[15%]"
              compId="499"
              comWidth={240}
              comHeight={48}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_arrow_2.svg"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                compId="1038:139"
                comWidth={48}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Arrow"
              />
              <PagerIndicator
                className="h-[12px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] w-[auto]"
                compId="44"
                comWidth={112}
                comHeight={12}
                compLeft={0}
                compRight={0}
                compType="PagerIndicator"
                count={6}
                activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-deep_orange_400"
                activeIndex={undefined}
                inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-bluegray_100"
                sliderRef={undefined}
                selectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
                unselectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
              />
              <Image
                src={"images/img_arrow_3.svg"}
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                compId="1038:149"
                comWidth={48}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Arrow"
              />
            </Row>
          </Row>
          <List
            className="font-poppins lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-4 min-h-[auto] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] mx-[auto] w-[83%]"
            compId="1038:135"
            comWidth={1600}
            comHeight={619}
            compLeft={10}
            compRight={10}
            compType="List"
            orientation="horizontal"
          >
            <Stack
              className="lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] w-[100%]"
              compId="470"
              comWidth={376}
              comHeight={619}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_border_1.svg"}
                className="absolute lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] inset-[0] object-cover rounded-radius32 w-[100%]"
                compId="1038:13"
                comWidth={376}
                comHeight={619}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="border"
              />
              <Column
                className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[83%]"
                compId="1034:236"
                comWidth={313}
                comHeight={555}
                compLeft={31}
                compRight={32}
                compType="Column"
              >
                <Column
                  className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] w-[100%]"
                  compId="514"
                  comWidth={313}
                  comHeight={313}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_image_1.svg"}
                    className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] mx-[auto] object-cover lg:w-[182px] xl:w-[208px] 2xl:w-[234px] 3xl:w-[281px] w-[313px]"
                    compId="1034:233"
                    comWidth={313}
                    comHeight={313}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                </Column>
                <Column
                  className="items-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="515"
                  comWidth={313}
                  comHeight={210}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-center justify-start lg:mx-[26px] xl:mx-[30px] 2xl:mx-[33px] 3xl:mx-[40px] mx-[45px] w-[67%]"
                    compId="1034:237"
                    comWidth={209}
                    comHeight={76}
                    compLeft={45}
                    compRight={45}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1034:238"
                      comWidth={209}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Smart Mop Robot`}</Text>
                    <Text
                      className="font-bold mx-[auto] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[53%]"
                      compId="1034:239"
                      comWidth={110}
                      comHeight={36}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`$1000.00`}</Text>
                  </Column>
                  <Row
                    className="items-center justify-end lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:mx-[22px] xl:mx-[26px] 2xl:mx-[29px] 3xl:mx-[35px] mx-[39px] w-[71%]"
                    compId="1038:5"
                    comWidth={221}
                    comHeight={36}
                    compLeft={39}
                    compRight={39}
                    compType="Row"
                  >
                    <Text
                      className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[17%]"
                      compId="1038:6"
                      comWidth={37}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`5.0`}</Text>
                    <RatingBar
                      className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] my-[1px]"
                      compId="494"
                      comWidth={176}
                      comHeight={32}
                      compLeft={8}
                      compRight={0}
                      compType="RatingBar"
                      value={5}
                      starCount={5}
                      activeColor="var(--orange_A100)"
                      size={((window.innerWidth - 15) * 32) / 1920}
                    ></RatingBar>
                  </Row>
                  <Button
                    className="bg-deep_orange_400 font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:mx-[40px] xl:mx-[46px] 2xl:mx-[52px] 3xl:mx-[62px] mx-[69.5px] not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[51%]"
                    compId="33"
                    comWidth={160}
                    comHeight={50}
                    compLeft={69.5}
                    compRight={69.5}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                </Column>
              </Column>
            </Stack>
            <Stack
              className="lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] w-[100%]"
              compId="472"
              comWidth={376}
              comHeight={619}
              compLeft={32}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_border_1.svg"}
                className="absolute lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] inset-[0] object-cover rounded-radius32 w-[100%]"
                compId="1038:76"
                comWidth={376}
                comHeight={619}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="border"
              />
              <Column
                className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[83%]"
                compId="1038:80"
                comWidth={313}
                comHeight={555}
                compLeft={31}
                compRight={32}
                compType="Column"
              >
                <Column
                  className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] w-[100%]"
                  compId="516"
                  comWidth={313}
                  comHeight={313}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_image_2.svg"}
                    className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] mx-[auto] object-cover lg:w-[182px] xl:w-[208px] 2xl:w-[234px] 3xl:w-[281px] w-[313px]"
                    compId="1038:77"
                    comWidth={313}
                    comHeight={313}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                </Column>
                <Column
                  className="items-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="517"
                  comWidth={313}
                  comHeight={210}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-center justify-start lg:mx-[43px] xl:mx-[50px] 2xl:mx-[56px] 3xl:mx-[67px] mx-[75px] w-[48%]"
                    compId="1038:81"
                    comWidth={149}
                    comHeight={76}
                    compLeft={75}
                    compRight={75}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1038:82"
                      comWidth={149}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Smart TV HD`}</Text>
                    <Text
                      className="font-bold lg:mx-[11px] xl:mx-[13px] 2xl:mx-[14px] 3xl:mx-[17px] mx-[19.5px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[74%]"
                      compId="1038:83"
                      comWidth={110}
                      comHeight={36}
                      compLeft={19.5}
                      compRight={19.5}
                      compType="Text"
                    >{`$1000.00`}</Text>
                  </Column>
                  <Row
                    className="items-center justify-end lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:mx-[22px] xl:mx-[26px] 2xl:mx-[29px] 3xl:mx-[35px] mx-[39px] w-[71%]"
                    compId="1038:84"
                    comWidth={221}
                    comHeight={36}
                    compLeft={39}
                    compRight={39}
                    compType="Row"
                  >
                    <Text
                      className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[17%]"
                      compId="1038:85"
                      comWidth={37}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`5.0`}</Text>
                    <RatingBar
                      className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] my-[1px]"
                      compId="495"
                      comWidth={176}
                      comHeight={32}
                      compLeft={8}
                      compRight={0}
                      compType="RatingBar"
                      value={5}
                      starCount={5}
                      activeColor="var(--orange_A100)"
                      size={((window.innerWidth - 15) * 32) / 1920}
                    ></RatingBar>
                  </Row>
                  <Button
                    className="bg-deep_orange_400 font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:mx-[40px] xl:mx-[46px] 2xl:mx-[52px] 3xl:mx-[62px] mx-[69.5px] not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[51%]"
                    compId="34"
                    comWidth={160}
                    comHeight={50}
                    compLeft={69.5}
                    compRight={69.5}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                </Column>
              </Column>
            </Stack>
            <Stack
              className="lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] w-[100%]"
              compId="474"
              comWidth={376}
              comHeight={619}
              compLeft={32}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_border_1.svg"}
                className="absolute lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] inset-[0] object-cover rounded-radius32 w-[100%]"
                compId="1038:96"
                comWidth={376}
                comHeight={619}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="border"
              />
              <Column
                className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[83%]"
                compId="1038:100"
                comWidth={313}
                comHeight={555}
                compLeft={31}
                compRight={32}
                compType="Column"
              >
                <Image
                  src={"images/img_image_3.svg"}
                  className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] mx-[auto] object-cover lg:w-[182px] xl:w-[208px] 2xl:w-[234px] 3xl:w-[281px] w-[313px]"
                  compId="1038:97"
                  comWidth={313}
                  comHeight={313}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="image"
                />
                <Column
                  className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[81%]"
                  compId="1038:101"
                  comWidth={252}
                  comHeight={76}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                    compId="1038:102"
                    comWidth={252}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Surveillance Camera`}</Text>
                  <Text
                    className="font-bold mx-[auto] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[44%]"
                    compId="1038:103"
                    comWidth={110}
                    comHeight={36}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`$1000.00`}</Text>
                </Column>
                <Row
                  className="items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[71%]"
                  compId="1038:104"
                  comWidth={221}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Text
                    className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[17%]"
                    compId="1038:105"
                    comWidth={37}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`5.0`}</Text>
                  <RatingBar
                    className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] my-[1px]"
                    compId="496"
                    comWidth={176}
                    comHeight={32}
                    compLeft={8}
                    compRight={0}
                    compType="RatingBar"
                    value={5}
                    starCount={5}
                    activeColor="var(--orange_A100)"
                    size={((window.innerWidth - 15) * 32) / 1920}
                  ></RatingBar>
                </Row>
                <Button
                  className="bg-deep_orange_400 font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[51%]"
                  compId="35"
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
              compId="476"
              comWidth={376}
              comHeight={619}
              compLeft={32}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_border_1.svg"}
                className="absolute lg:h-[362px] xl:h-[413px] 2xl:h-[465px] 3xl:h-[558px] h-[619px] inset-[0] object-cover rounded-radius32 w-[100%]"
                compId="1038:116"
                comWidth={376}
                comHeight={619}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="border"
              />
              <Column
                className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[83%]"
                compId="1038:120"
                comWidth={313}
                comHeight={555}
                compLeft={31}
                compRight={32}
                compType="Column"
              >
                <Column
                  className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] w-[100%]"
                  compId="519"
                  comWidth={313}
                  comHeight={313}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_image_4.svg"}
                    className="lg:h-[183px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] h-[313px] mx-[auto] object-cover lg:w-[182px] xl:w-[208px] 2xl:w-[234px] 3xl:w-[281px] w-[313px]"
                    compId="1038:117"
                    comWidth={313}
                    comHeight={313}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                </Column>
                <Column
                  className="items-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="520"
                  comWidth={313}
                  comHeight={210}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-center justify-start lg:mx-[46px] xl:mx-[52px] 2xl:mx-[59px] 3xl:mx-[71px] mx-[79px] w-[45%]"
                    compId="1038:121"
                    comWidth={141}
                    comHeight={76}
                    compLeft={79}
                    compRight={79}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1038:122"
                      comWidth={141}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Joystick Pro`}</Text>
                    <Text
                      className="font-bold xl:mx-[10px] 2xl:mx-[11px] 3xl:mx-[13px] mx-[15.5px] lg:mx-[9px] text-deep_orange_400 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[78%]"
                      compId="1038:123"
                      comWidth={110}
                      comHeight={36}
                      compLeft={15.5}
                      compRight={15.5}
                      compType="Text"
                    >{`$1000.00`}</Text>
                  </Column>
                  <Row
                    className="items-center justify-end lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:mx-[22px] xl:mx-[26px] 2xl:mx-[29px] 3xl:mx-[35px] mx-[39px] w-[71%]"
                    compId="1038:124"
                    comWidth={221}
                    comHeight={36}
                    compLeft={39}
                    compRight={39}
                    compType="Row"
                  >
                    <Text
                      className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_500 text-left w-[17%]"
                      compId="1038:125"
                      comWidth={37}
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`5.0`}</Text>
                    <RatingBar
                      className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] my-[1px]"
                      compId="497"
                      comWidth={176}
                      comHeight={32}
                      compLeft={8}
                      compRight={0}
                      compType="RatingBar"
                      value={5}
                      starCount={5}
                      activeColor="var(--orange_A100)"
                      size={((window.innerWidth - 15) * 32) / 1920}
                    ></RatingBar>
                  </Row>
                  <Button
                    className="bg-deep_orange_400 font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:mx-[40px] xl:mx-[46px] 2xl:mx-[52px] 3xl:mx-[62px] mx-[69.5px] not-italic 3xl:py-[11px] py-[13.045px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[51%]"
                    compId="36"
                    comWidth={160}
                    comHeight={50}
                    compLeft={69.5}
                    compRight={69.5}
                    compType="Button"
                  >{`Add to Cart`}</Button>
                </Column>
              </Column>
            </Stack>
          </List>
        </Column>
        <Column
          className="font-montserrat items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
          compId="395"
          comWidth={1920}
          comHeight={802}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Text
            className="font-bold mx-[auto] lg:text-fs32 xl:text-fs37 2xl:text-fs42 3xl:text-fs50 text-fs56 text-gray_800 text-left w-[7%]"
            compId="827:118"
            comWidth={136}
            comHeight={68}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`Blog`}</Text>
          <List
            className="font-poppins lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 min-h-[auto] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] mx-[auto] w-[83%]"
            compId="394"
            comWidth={1600}
            comHeight={654}
            compLeft={10}
            compRight={10}
            compType="List"
            orientation="horizontal"
          >
            <Stack
              className="lg:h-[382px] xl:h-[437px] 2xl:h-[491px] 3xl:h-[589px] h-[654px] w-[100%]"
              compId="478"
              comWidth={512}
              comHeight={654}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Stack
                className="absolute lg:h-[382px] xl:h-[437px] 2xl:h-[491px] 3xl:h-[589px] h-[654px] inset-[0] w-[100%]"
                compId="480"
                comWidth={512}
                comHeight={654}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <div
                  className="absolute border-2 border-bluegray_100 border-solid bottom-[0] lg:h-[294px] xl:h-[337px] 2xl:h-[379px] 3xl:h-[454px] h-[504px] rounded-radius32 w-[100%]"
                  compId="827:122"
                  comWidth={512}
                  comHeight={504}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <div
                  className="absolute bg-gray_400 lg:h-[263px] xl:h-[301px] 2xl:h-[338px] 3xl:h-[406px] h-[450px] rounded-radius32 top-[0] w-[100%]"
                  compId="827:123"
                  comWidth={512}
                  comHeight={450}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
              </Stack>
              <Column
                className="absolute bottom-[6%] inset-x-[0] items-start justify-start mx-[auto] w-[88%]"
                compId="389"
                comWidth={448}
                comHeight={131}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium leading-lh lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                  compId="827:124"
                  comWidth={448}
                  comHeight={72}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`We Offer the Best Quality Product to Our Customers`}</Text>
                <Text
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[43%]"
                  compId="827:125"
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
            </Stack>
            <Stack
              className="lg:h-[382px] xl:h-[437px] 2xl:h-[491px] 3xl:h-[589px] h-[654px] w-[100%]"
              compId="482"
              comWidth={512}
              comHeight={654}
              compLeft={32}
              compRight={0}
              compType="Stack"
            >
              <Stack
                className="absolute lg:h-[382px] xl:h-[437px] 2xl:h-[491px] 3xl:h-[589px] h-[654px] inset-[0] w-[100%]"
                compId="484"
                comWidth={512}
                comHeight={654}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <div
                  className="absolute border-2 border-bluegray_100 border-solid bottom-[0] lg:h-[294px] xl:h-[337px] 2xl:h-[379px] 3xl:h-[454px] h-[504px] rounded-radius32 w-[100%]"
                  compId="1034:13"
                  comWidth={512}
                  comHeight={504}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <div
                  className="absolute bg-gray_400 lg:h-[263px] xl:h-[301px] 2xl:h-[338px] 3xl:h-[406px] h-[450px] rounded-radius32 top-[0] w-[100%]"
                  compId="1034:14"
                  comWidth={512}
                  comHeight={450}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
              </Stack>
              <Column
                className="absolute bottom-[6%] inset-x-[0] items-start justify-start mx-[auto] w-[88%]"
                compId="391"
                comWidth={448}
                comHeight={131}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium leading-lh lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                  compId="1034:15"
                  comWidth={448}
                  comHeight={72}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`We Offer the Best Quality Product to Our Customers`}</Text>
                <Text
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[43%]"
                  compId="1034:16"
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
            </Stack>
            <Stack
              className="lg:h-[382px] xl:h-[437px] 2xl:h-[491px] 3xl:h-[589px] h-[654px] w-[100%]"
              compId="486"
              comWidth={512}
              comHeight={654}
              compLeft={32}
              compRight={0}
              compType="Stack"
            >
              <Stack
                className="absolute lg:h-[382px] xl:h-[437px] 2xl:h-[491px] 3xl:h-[589px] h-[654px] inset-[0] w-[100%]"
                compId="488"
                comWidth={512}
                comHeight={654}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <div
                  className="absolute border-2 border-bluegray_100 border-solid bottom-[0] lg:h-[294px] xl:h-[337px] 2xl:h-[379px] 3xl:h-[454px] h-[504px] rounded-radius32 w-[100%]"
                  compId="1034:18"
                  comWidth={512}
                  comHeight={504}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <div
                  className="absolute bg-gray_400 lg:h-[263px] xl:h-[301px] 2xl:h-[338px] 3xl:h-[406px] h-[450px] rounded-radius32 top-[0] w-[100%]"
                  compId="1034:19"
                  comWidth={512}
                  comHeight={450}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
              </Stack>
              <Column
                className="absolute bottom-[6%] inset-x-[0] items-start justify-start mx-[auto] w-[88%]"
                compId="393"
                comWidth={448}
                comHeight={131}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-medium leading-lh lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                  compId="1034:20"
                  comWidth={448}
                  comHeight={72}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`We Offer the Best Quality Product to Our Customers`}</Text>
                <Text
                  className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[43%]"
                  compId="1034:21"
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
            </Stack>
          </List>
        </Column>
        <Stack
          className="font-poppins lg:h-[251px] xl:h-[287px] 2xl:h-[322px] 3xl:h-[387px] h-[429px] xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] mx-[auto] w-[83%]"
          compId="490"
          comWidth={1600}
          comHeight={429}
          compLeft={10}
          compRight={10}
          compType="Stack"
        >
          <Image
            src={"images/img_placeholder_2.svg"}
            className="absolute lg:h-[251px] xl:h-[287px] 2xl:h-[322px] 3xl:h-[387px] h-[429px] inset-[0] object-cover w-[100%]"
            compId="847:54"
            comWidth={1600}
            comHeight={429}
            compLeft={0}
            compRight={0}
            compType="Image"
            alt="placeholder"
          />
          <Column
            className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[8%] my-[auto] w-[40%]"
            compId="1026:51"
            comWidth={637}
            comHeight={223}
            compLeft={128}
            compRight={0}
            compType="Column"
          >
            <Column
              className="w-[100%]"
              compId="522"
              comWidth={637}
              comHeight={107}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="items-start justify-start w-[100%]"
                compId="810:332"
                comWidth={637}
                comHeight={107}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold font-montserrat lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[100%]"
                  compId="810:333"
                  comWidth={637}
                  comHeight={59}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Join our newsletter now!`}</Text>
                <Text
                  className="font-normal font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[75%]"
                  compId="810:334"
                  comWidth={480}
                  comHeight={32}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Register now and get our latest updates and promos.`}</Text>
              </Column>
            </Column>
            <Stack
              className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[81%]"
              compId="492"
              comWidth={518}
              comHeight={60}
              compLeft={0}
              compRight={10}
              compType="Stack"
            >
              <Input
                className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic xl:pb-[12px] 3xl:pb-[16px] pb-[18.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] xl:pt-[11px] 3xl:pt-[15px] pt-[17.545px] lg:py-[10px] 2xl:py-[13px] rounded-radius16 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500 text-gray_500 text-left tracking-ls1 w-[100%]"
                compId="46"
                comWidth={518}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="Group46"
                placeholder={`Enter your email`}
              ></Input>
              <Button
                className="absolute bg-deep_orange_400 font-bold lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[0] rounded-radius16 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
                compId="37"
                comWidth={105}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Button"
              >{`Join`}</Button>
            </Stack>
          </Column>
        </Stack>
        <Row
          className="items-center justify-center lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] mx-[auto] opacity-op5 w-[83%]"
          compId="810:339"
          comWidth={1600}
          comHeight={54}
          compLeft={10}
          compRight={10}
          compType="Row"
        >
          <Text
            className="font-normal font-playfairdisplay lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] not-italic lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[9%]"
            compId="841:8"
            comWidth={142}
            comHeight={48}
            compLeft={0}
            compRight={0}
            compType="Text"
          >{`SimSong`}</Text>
          <Text
            className="font-medium font-poppins lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[7%]"
            compId="841:9"
            comWidth={108}
            comHeight={54}
            compLeft={80}
            compRight={0}
            compType="Text"
          >{`Harps`}</Text>
          <Text
            className="font-normal font-vidaloka lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] my-[5px] not-italic lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[8%]"
            compId="841:10"
            comWidth={127}
            comHeight={44}
            compLeft={80}
            compRight={0}
            compType="Text"
          >{`DiskVan`}</Text>
          <Text
            className="font-bold font-montserrat lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] my-[5px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[5%]"
            compId="841:11"
            comWidth={84}
            comHeight={44}
            compLeft={80}
            compRight={0}
            compType="Text"
          >{`Ikon`}</Text>
          <Text
            className="font-bold font-nunito lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[7%]"
            compId="1026:49"
            comWidth={109}
            comHeight={49}
            compLeft={80}
            compRight={0}
            compType="Text"
          >{`Strons`}</Text>
          <Text
            className="font-bold font-inter lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] my-[5px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[9%]"
            compId="1026:50"
            comWidth={137}
            comHeight={44}
            compLeft={80}
            compRight={0}
            compType="Text"
          >{`Cocoon`}</Text>
        </Row>
        <footer
          className="font-poppins lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
          compId="823:19"
          comWidth={1920}
          comHeight={585}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="bg-deep_orange_400_cf items-center justify-end w-[100%]"
            compId="399"
            comWidth={1920}
            comHeight={585}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-start justify-between lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
              compId="397"
              comWidth={1920}
              comHeight={260}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] mb-[22px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] w-[20%]"
                compId="823:21"
                comWidth={381}
                comHeight={238}
                compLeft={160}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-gray_800 text-left w-[29%]"
                  compId="823:22"
                  comWidth={112}
                  comHeight={54}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Tronix`}</Text>
                <Text
                  className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                  compId="823:23"
                  comWidth={381}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                <Image
                  src={"images/img_sosmedia_1.svg"}
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] object-contain w-[57%]"
                  compId="823:29"
                  comWidth={216}
                  comHeight={56}
                  compLeft={0}
                  compRight={10}
                  compType="Image"
                  alt="sosmedia"
                />
              </Column>
              <Row
                className="font-montserrat items-start justify-center xl:mr-[108px] 2xl:mr-[122px] 3xl:mr-[146px] mr-[163px] lg:mr-[95px] w-[41%]"
                compId="500"
                comWidth={784}
                comHeight={260}
                compLeft={0}
                compRight={163}
                compType="Row"
              >
                <Column
                  className="items-start justify-start w-[15%]"
                  compId="823:46"
                  comWidth={120}
                  comHeight={260}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                    compId="823:47"
                    comWidth={120}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Company`}</Text>
                  <Column
                    className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[67%]"
                    compId="823:48"
                    comWidth={80}
                    comHeight={199}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[68%]"
                      compId="823:49"
                      comWidth={54}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`About`}</Text>
                    <Text
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                      compId="823:50"
                      comWidth={80}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Products`}</Text>
                    <Text
                      className="font-normal lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] mr-[6px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[93%]"
                      compId="823:51"
                      comWidth={74}
                      comHeight={27}
                      compLeft={0}
                      compRight={6}
                      compType="Text"
                    >{`Contact`}</Text>
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[50%]"
                      compId="823:52"
                      comWidth={40}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Blog`}</Text>
                    <Text
                      className="font-normal lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[90%]"
                      compId="1026:59"
                      comWidth={72}
                      comHeight={27}
                      compLeft={0}
                      compRight={8}
                      compType="Text"
                    >{`Careers`}</Text>
                  </Column>
                </Column>
                <Column
                  className="items-start justify-start lg:mb-[25px] xl:mb-[28px] 2xl:mb-[32px] 3xl:mb-[38px] mb-[43px] 3xl:ml-[114px] ml-[127px] lg:ml-[74px] xl:ml-[84px] 2xl:ml-[95px] w-[21%]"
                  compId="823:53"
                  comWidth={164}
                  comHeight={217}
                  compLeft={127}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[91%]"
                    compId="823:54"
                    comWidth={150}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Information`}</Text>
                  <Column
                    className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="523"
                    comWidth={164}
                    comHeight={156}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="823:55"
                      comWidth={164}
                      comHeight={156}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[65%]"
                        compId="823:56"
                        comWidth={107}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Help Center`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                        compId="823:57"
                        comWidth={164}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Payment Methods`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[88%]"
                        compId="823:59"
                        comWidth={145}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Return & Refund`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[74%]"
                        compId="823:58"
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
                  className="items-start justify-start 3xl:mb-[111px] mb-[124px] lg:mb-[72px] xl:mb-[82px] 2xl:mb-[93px] 3xl:ml-[117px] ml-[130px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[97px] w-[31%]"
                  compId="823:60"
                  comWidth={243}
                  comHeight={136}
                  compLeft={130}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[41%]"
                    compId="823:61"
                    comWidth={100}
                    comHeight={29}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Contact`}</Text>
                  <Column
                    className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                    compId="524"
                    comWidth={243}
                    comHeight={75}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="823:63"
                      comWidth={243}
                      comHeight={75}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-start w-[100%]"
                        compId="823:64"
                        comWidth={243}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_call_1.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="823:65"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Call"
                        />
                        <Text
                          className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                          compId="823:67"
                          comWidth={211}
                          comHeight={32}
                          compLeft={8}
                          compRight={0}
                          compType="Text"
                        >{`+1234567890`}</Text>
                      </Row>
                      <Row
                        className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]"
                        compId="823:68"
                        comWidth={243}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_email_2.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="823:69"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Email"
                        />
                        <Text
                          className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                          compId="823:71"
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
            </Row>
            <Line
              className="bg-gray_500 h-[1px] 3xl:mt-[114px] mt-[127px] lg:mt-[74px] xl:mt-[84px] 2xl:mt-[95px] mx-[auto] rotate-[-45deg] w-[83%]"
              compId="1029:14"
              comWidth={1600}
              comHeight={1}
              compLeft={10}
              compRight={10}
              compType="Line"
            />
            <Row
              className="items-center justify-between lg:mb-[31px] xl:mb-[36px] 2xl:mb-[40px] 3xl:mb-[48px] mb-[54px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] w-[100%]"
              compId="398"
              comWidth={1920}
              comHeight={32}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-normal lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_800 text-left w-[15%]"
                compId="823:27"
                comWidth={287}
                comHeight={21}
                compLeft={160}
                compRight={0}
                compType="Text"
              >{`Copyright © 2021 Tronix. All Right Reseved`}</Text>
              <Image
                src={"images/img_payment.svg"}
                className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] mr-[160px] lg:mr-[93px] object-contain w-[7%]"
                compId="1034:24"
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

export default HomepageV1Page;
