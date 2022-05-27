import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Line } from "components/Line";

const ContactPagePage = () => {
  return (
    <>
      <Column
        className="bg-gray_50 mx-[auto] w-[100%]"
        compId="868:181"
        comWidth={1920}
        comHeight={2074}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="items-start justify-start w-[100%]"
          compId="1382"
          comWidth={1920}
          comHeight={2074}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Column
            className="font-poppins w-[100%]"
            compId="1389"
            comWidth={1920}
            comHeight={120}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <header
              className="w-[100%]"
              compId="315"
              comWidth={1920}
              comHeight={120}
              compLeft={0}
              compRight={0}
              compType="Header"
            >
              <Row
                className="items-center justify-start rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[100%]"
                compId="1371"
                comWidth={1920}
                comHeight={120}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-semibold xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:my-[19px] xl:my-[22px] 2xl:my-[24px] 3xl:my-[29px] my-[33px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[6%]"
                  compId="1063:178"
                  comWidth={112}
                  comHeight={54}
                  compLeft={160}
                  compRight={0}
                  compType="Text"
                >{`Tronix`}</Text>
                <Row
                  className="bg-bluegray_100_3f items-center justify-center 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] my-[36px] rounded-radius8 w-[28%]"
                  compId="1369"
                  comWidth={544}
                  comHeight={48}
                  compLeft={128}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:my-[9px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[20%]"
                    compId="1063:181"
                    comWidth={109}
                    comHeight={27}
                    compLeft={32}
                    compRight={0}
                    compType="Text"
                  >{`Search here`}</Text>
                  <Image
                    src={"images/img_search_1.svg"}
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[207px] xl:ml-[236px] 2xl:ml-[266px] 3xl:ml-[319px] ml-[355px] object-contain rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                    compId="1063:182"
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
                  compId="1388"
                  comWidth={473}
                  comHeight={27}
                  compLeft={103}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                    compId="1063:198"
                    comWidth={54}
                    comHeight={27}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Home`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                    compId="1063:199"
                    comWidth={54}
                    comHeight={27}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[15%]"
                    compId="1063:200"
                    comWidth={70}
                    comHeight={27}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`Product`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-poppins lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[8%]"
                    compId="1063:201"
                    comWidth={40}
                    comHeight={27}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`Blog`}</Text>
                  <Text
                    className="cursor-pointer hover:font-normal font-normal font-nunitosans lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] my-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[13%]"
                    compId="1063:202"
                    comWidth={63}
                    comHeight={25}
                    compLeft={48}
                    compRight={0}
                    compType="Text"
                  >{`Contact`}</Text>
                </Row>
                <Row
                  className="items-end justify-center lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] mb-[44px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[8%]"
                  compId="1367"
                  comWidth={160}
                  comHeight={44}
                  compLeft={80}
                  compRight={0}
                  compType="Row"
                >
                  <Stack
                    className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] h-[44px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px] w-[44px]"
                    compId="1385"
                    comWidth={44}
                    comHeight={44}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_shoppingbag_6.svg"}
                      className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] left-[0] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      compId="1063:189"
                      comWidth={32}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="ShoppingBag"
                    />
                    <Column
                      className="absolute bg-deep_orange_400 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] items-center justify-start lg:py-[1px] 3xl:py-[2px] 2xl:py-[2px] xl:py-[2px] py-[3px] right-[0] rounded-radius50 top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="314"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mx-[auto] not-italic 3xl:text-fs10 text-fs12 lg:text-fs7 xl:text-fs8 2xl:text-fs9 text-gray_50 text-left w-[67%]"
                        compId="1063:196"
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
                    compId="1063:191"
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
                    compId="1063:193"
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
          <Text
            className="font-bold font-montserrat lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] xl:mx-[106px] 2xl:mx-[120px] 3xl:mx-[144px] mx-[160px] lg:mx-[93px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_800 text-left w-[14%]"
            compId="1063:203"
            comWidth={277}
            comHeight={59}
            compLeft={160}
            compRight={160}
            compType="Text"
          >{`Contact Us`}</Text>
          <Text
            className="font-normal font-poppins leading-lh lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] xl:mx-[106px] 2xl:mx-[120px] 3xl:mx-[144px] mx-[160px] lg:mx-[93px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[48%]"
            compId="1063:204"
            comWidth={920}
            comHeight={81}
            compLeft={160}
            compRight={160}
            compType="Text"
          >{`Learn more about our products and services to get a better experience in shopping at our website. Please complete this form to get the latest information from us. Our Customer Service is available on 24/7. The information you provide will be confidential and not shared with third parties.`}</Text>
          <Column
            className="font-poppins lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] w-[100%]"
            compId="1390"
            comWidth={1920}
            comHeight={1654}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-start w-[100%]"
              compId="1380"
              comWidth={1920}
              comHeight={664}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="border border-gray_800 border-solid items-center xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:py-[40px] xl:py-[46px] 2xl:py-[52px] 3xl:py-[63px] py-[70px] rounded-radius32 w-[48%]"
                compId="1374"
                comWidth={920}
                comHeight={664}
                compLeft={160}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-start justify-start mx-[auto] w-[82%]"
                  compId="318"
                  comWidth={756}
                  comHeight={103}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[9%]"
                    compId="868:729"
                    comWidth={69}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Name *`}</Text>
                  <Input
                    className="bg-gray_50 placeholder:bg-transparent border border-gray_800 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius8 placeholder:text-gray_800 w-[100%]"
                    compId="317"
                    comWidth={756}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group317"
                    placeholder={`Name *`}
                  ></Input>
                </Column>
                <Column
                  className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[82%]"
                  compId="320"
                  comWidth={756}
                  comHeight={103}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[8%]"
                    compId="868:732"
                    comWidth={63}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Email *`}</Text>
                  <Input
                    className="bg-gray_50 placeholder:bg-transparent border border-gray_800 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius8 placeholder:text-gray_800 w-[100%]"
                    compId="319"
                    comWidth={756}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group319"
                    placeholder={`Email *`}
                  ></Input>
                </Column>
                <Column
                  className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[82%]"
                  compId="322"
                  comWidth={756}
                  comHeight={162}
                  compLeft={10}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[11%]"
                    compId="868:736"
                    comWidth={81}
                    comHeight={27}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Subject *`}</Text>
                  <Input
                    className="bg-gray_50 placeholder:bg-transparent border border-gray_500 border-solid xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius8 placeholder:text-gray_800 w-[100%]"
                    compId="321"
                    comWidth={756}
                    comHeight={119}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group321"
                    placeholder={`Subject *`}
                  ></Input>
                </Column>
                <Row
                  className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[82%]"
                  compId="870:774"
                  comWidth={756}
                  comHeight={60}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkedbox_3.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="870:776"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Checkedbox"
                  />
                  <Text
                    className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[31%]"
                    compId="870:775"
                    comWidth={235}
                    comHeight={27}
                    compLeft={8}
                    compRight={0}
                    compType="Text"
                  >{`Accept Terms & Condition`}</Text>
                  <Button
                    className="bg-deep_orange_400 font-medium lg:ml-[162px] xl:ml-[185px] 2xl:ml-[208px] 3xl:ml-[250px] ml-[278px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[28%]"
                    compId="312"
                    comWidth={211}
                    comHeight={60}
                    compLeft={278}
                    compRight={0}
                    compType="Button"
                  >{`Submit`}</Button>
                </Row>
              </Column>
              <Column
                className="bg-deep_orange_400 font-montserrat items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] rounded-radius32 w-[34%]"
                compId="1063:174"
                comWidth={648}
                comHeight={664}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[63px] mt-[70px] lg:mx-[40px] xl:mx-[46px] 2xl:mx-[52px] 3xl:mx-[63px] mx-[70px] lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[31%]"
                  compId="870:740"
                  comWidth={200}
                  comHeight={59}
                  compLeft={70}
                  compRight={70}
                  compType="Text"
                >{`Contact`}</Text>
                <Column
                  className="font-poppins items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  compId="1391"
                  comWidth={648}
                  comHeight={244}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start mx-[auto] w-[80%]"
                    compId="870:741"
                    comWidth={518}
                    comHeight={244}
                    compLeft={10}
                    compRight={10}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="1392"
                      comWidth={518}
                      comHeight={108}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-start w-[100%]"
                        compId="870:762"
                        comWidth={518}
                        comHeight={108}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_location.svg"}
                          className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mb-[44px] xl:mb-[50px] 2xl:mb-[57px] 3xl:mb-[68px] mb-[76px] object-contain rounded-radius4 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                          compId="870:770"
                          comWidth={32}
                          comHeight={32}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Location"
                        />
                        <Text
                          className="font-normal leading-lh xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_50 text-left w-[91%]"
                          compId="870:765"
                          comWidth={470}
                          comHeight={108}
                          compLeft={16}
                          compRight={0}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                      </Row>
                    </Column>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[50%]"
                      compId="870:742"
                      comWidth={259}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_call_11.svg"}
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] my-[1px] object-contain rounded-radius4 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                        compId="870:743"
                        comWidth={32}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Call"
                      />
                      <Text
                        className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_50 text-left w-[81%]"
                        compId="870:745"
                        comWidth={211}
                        comHeight={36}
                        compLeft={16}
                        compRight={0}
                        compType="Text"
                      >{`+1234567890`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[55%]"
                      compId="870:746"
                      comWidth={283}
                      comHeight={36}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_email_10.svg"}
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] my-[1px] object-contain rounded-radius4 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                        compId="870:747"
                        comWidth={32}
                        comHeight={32}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Email"
                      />
                      <Text
                        className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_50 text-left w-[83%]"
                        compId="870:749"
                        comWidth={235}
                        comHeight={36}
                        compLeft={16}
                        compRight={0}
                        compType="Text"
                      >{`lovia@support.com`}</Text>
                    </Row>
                  </Column>
                </Column>
                <Text
                  className="font-bold lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] lg:mx-[40px] xl:mx-[46px] 2xl:mx-[52px] 3xl:mx-[63px] mx-[70px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_50 text-left w-[19%]"
                  compId="1063:173"
                  comWidth={122}
                  comHeight={29}
                  compLeft={70}
                  compRight={70}
                  compType="Text"
                >{`Follow Us`}</Text>
                <Image
                  src={"images/img_sosmedia_13.svg"}
                  className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] mb-[102px] lg:mb-[59px] xl:mb-[68px] 2xl:mb-[76px] 3xl:mb-[91px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[40px] xl:mx-[46px] 2xl:mx-[52px] 3xl:mx-[63px] mx-[70px] object-contain w-[26%]"
                  compId="870:750"
                  comWidth={168}
                  comHeight={40}
                  compLeft={70}
                  compRight={70}
                  compType="Image"
                  alt="sosmedia"
                />
              </Column>
            </Row>
            <Row
              className="bg-deep_orange_400 items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
              compId="1375"
              comWidth={1920}
              comHeight={245}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_newsletter_1.svg"}
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] xl:mb-[49px] 2xl:mb-[55px] 3xl:mb-[66px] mb-[74px] lg:ml-[149px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] ml-[256px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] mt-[75px] lg:my-[43px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                compId="1063:104"
                comWidth={96}
                comHeight={96}
                compLeft={256}
                compRight={0}
                compType="Image"
                alt="Newsletter"
              />
              <Column
                className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[40px] xl:my-[46px] 2xl:my-[51px] 3xl:my-[62px] my-[69px] w-[33%]"
                compId="1063:112"
                comWidth={637}
                comHeight={107}
                compLeft={32}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold font-montserrat lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43 text-fs48 text-gray_50 text-left w-[100%]"
                  compId="1063:113"
                  comWidth={637}
                  comHeight={59}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Join our newsletter now!`}</Text>
                <Text
                  className="font-normal font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 text-left w-[75%]"
                  compId="1063:114"
                  comWidth={480}
                  comHeight={32}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Register now and get our latest updates and promos.`}</Text>
              </Column>
              <Stack
                className="lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] h-[76px] 3xl:mb-[75px] mb-[84px] 3xl:ml-[105px] ml-[117px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] 3xl:mt-[76px] mt-[85px] lg:my-[49px] xl:my-[56px] 2xl:my-[63px] w-[27%]"
                compId="1387"
                comWidth={526}
                comHeight={76}
                compLeft={117}
                compRight={0}
                compType="Stack"
              >
                <Input
                  className="absolute bg-gray_50 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pb-[15px] pb-[26.545px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] lg:pt-[14px] pt-[25.545px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] rounded-radius8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500 text-gray_500 text-left tracking-ls1 w-[100%]"
                  compId="316"
                  comWidth={526}
                  comHeight={76}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Group316"
                  placeholder={`Enter your email`}
                ></Input>
                <Button
                  className="absolute bg-gray_800 font-bold h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] right-[2%] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[20%]"
                  compId="313"
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
              compId="1063:115"
              comWidth={1920}
              comHeight={585}
              compLeft={0}
              compRight={0}
              compType="Footer"
            >
              <Column
                className="bg-deep_orange_400_cf items-center justify-end w-[100%]"
                compId="1379"
                comWidth={1920}
                comHeight={585}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-start justify-start lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] w-[100%]"
                  compId="1376"
                  comWidth={1920}
                  comHeight={260}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start justify-start 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] w-[20%]"
                    compId="1378"
                    comWidth={381}
                    comHeight={246}
                    compLeft={160}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-deep_orange_400 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[29%]"
                      compId="1063:126"
                      comWidth={112}
                      comHeight={54}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Tronix`}</Text>
                    <Text
                      className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                      compId="1063:127"
                      comWidth={381}
                      comHeight={64}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[64%]"
                      compId="1063:162"
                      comWidth={243}
                      comHeight={32}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_call_2.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1063:163"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Call"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                        compId="1063:165"
                        comWidth={211}
                        comHeight={32}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >{`+1234567890`}</Text>
                    </Row>
                    <Row
                      className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[64%]"
                      compId="1063:166"
                      comWidth={243}
                      comHeight={32}
                      compLeft={0}
                      compRight={10}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_email_2.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="1063:167"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Email"
                      />
                      <Text
                        className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[87%]"
                        compId="1063:169"
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
                    compId="1063:128"
                    comWidth={120}
                    comHeight={260}
                    compLeft={435}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[100%]"
                      compId="1063:129"
                      comWidth={120}
                      comHeight={29}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Company`}</Text>
                    <Column
                      className="font-poppins items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[67%]"
                      compId="1063:130"
                      comWidth={80}
                      comHeight={199}
                      compLeft={0}
                      compRight={10}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[68%]"
                        compId="1063:131"
                        comWidth={54}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`About`}</Text>
                      <Text
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                        compId="1063:132"
                        comWidth={80}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Products`}</Text>
                      <Text
                        className="font-normal lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] mr-[6px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[93%]"
                        compId="1063:133"
                        comWidth={74}
                        comHeight={27}
                        compLeft={0}
                        compRight={6}
                        compType="Text"
                      >{`Contact`}</Text>
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[50%]"
                        compId="1063:134"
                        comWidth={40}
                        comHeight={27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Blog`}</Text>
                      <Text
                        className="font-normal lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[90%]"
                        compId="1063:135"
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
                    compId="1063:136"
                    comWidth={164}
                    comHeight={217}
                    compLeft={152}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[91%]"
                      compId="1063:137"
                      comWidth={150}
                      comHeight={29}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Information`}</Text>
                    <Column
                      className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                      compId="1393"
                      comWidth={164}
                      comHeight={156}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="items-start justify-start w-[100%]"
                        compId="1063:138"
                        comWidth={164}
                        comHeight={156}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[65%]"
                          compId="1063:139"
                          comWidth={107}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Help Center`}</Text>
                        <Text
                          className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[100%]"
                          compId="1063:140"
                          comWidth={164}
                          comHeight={27}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Payment Methods`}</Text>
                        <Text
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[88%]"
                          compId="1063:141"
                          comWidth={145}
                          comHeight={27}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Return & Refund`}</Text>
                        <Text
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic opacity-op8 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_800 text-left w-[74%]"
                          compId="1063:142"
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
                    compId="1063:143"
                    comWidth={216}
                    comHeight={117}
                    compLeft={108}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-gray_800 text-left w-[56%]"
                      compId="1063:144"
                      comWidth={122}
                      comHeight={29}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Follow Us`}</Text>
                    <Column
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                      compId="1394"
                      comWidth={216}
                      comHeight={56}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Image
                        src={"images/img_sosmedia_12.svg"}
                        className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-cover w-[100%]"
                        compId="1063:145"
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
                  compId="1063:170"
                  comWidth={1600}
                  comHeight={1}
                  compLeft={10}
                  compRight={10}
                  compType="Line"
                />
                <Row
                  className="items-center justify-between lg:mb-[31px] xl:mb-[36px] 2xl:mb-[40px] 3xl:mb-[48px] mb-[54px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] w-[100%]"
                  compId="1377"
                  comWidth={1920}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] ml-[160px] lg:ml-[93px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_800 text-left w-[15%]"
                    compId="1063:124"
                    comWidth={287}
                    comHeight={21}
                    compLeft={160}
                    compRight={0}
                    compType="Text"
                  >{`Copyright © 2021 Tronix. All Right Reseved`}</Text>
                  <Image
                    src={"images/img_payment_4.svg"}
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] mr-[160px] lg:mr-[93px] object-contain w-[7%]"
                    compId="1063:117"
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

export default ContactPagePage;
