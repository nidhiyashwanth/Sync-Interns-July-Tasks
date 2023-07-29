import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // updated

import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,Svg,
  Line
  
} from "@react-pdf/renderer";

const BORDER_COLOR = "#bfbfbf";
const BORDER_STYLE = "solid";
const COL1_WIDTH = 10;
const COLN_WIDTH = (100 - COL1_WIDTH) / 4;
Font.register({
  family: "Noto Sans Tamil",
  src: "https://fonts.gstatic.com/ea/notosanstamil/v3/NotoSansTamil-Regular.ttf",
});

const styles = StyleSheet.create({
  centerText: {
    textAlign: "center",
  },
  rightText: {
    textAlign: "right",
  },
  dFlex:{
    display:"flex",
    flexDirection:"row"
  },
  dFlexC:{
    display:"flex",
    flexDirection:"column"
  },
  dFlexSB:{
    display:"flex",
    flexDirection:"row",
   justifyContent:"space-between"
  },
  dFlexSA:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  header2:{
    fontSize:16,
  },
  marginTop10:{
    marginTop:10
  },
  marginTop20:{
    marginTop:20
  },
  marginTop3:{
    marginTop:3
  },
  marginTop6:{
    marginTop:6
  },
  width70:{
    width:"30%"
  },
  colorGrey:{
    color:"#595959",
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontSize: 12,
    fontFamily: "Noto Sans Tamil",
    color: "#000",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderLeftWidth: 10,
    borderBottomWidth: 10,
  },
  
 
  clientName:{
    fontSize:18,
  },

  clientAdress:{
    marginTop:5,
    color:"#595959",
  },

  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
const PdfBill = () => {
   
  return (
 
    <PDFViewer height="700px" width="100%">
      <Document size="A4" title="withdraw.pdf">
        <Page style={styles.body}>

          {/* header Section */}
          <View >
            <Text style={[styles.clientName,styles.centerText]} > 
            Jason Miller,  React Developer
            </Text>
            <Text style={[styles.clientAdress,styles.centerText]} > 
            1515 Pacific Ave
Los Angeles, CA 90291
United States, 3868683442, portfolio.com 
            </Text>           
          </View>

          {/* Summary Section  */}
          <View style={styles.marginTop20}>
            <Text  style={[styles.header2,styles.centerText]}>
            Profile  Summary
            </Text>
          <View> 
            <Svg height="5" width="495">
              <Line x1="0" y1="5" x2="500" y2="5" strokeWidth={2} stroke="rgb(0,0,0)" />
            </Svg>
          </View>
            <Text  style={[styles.marginTop10,styles.colorGrey]}>
            Experienced Amazon Associate with five years’ tenure in a shipping yard
setting, maintaining an average picking/packing speed of 98%. Holds a
zero error% score in adhering to packing specs and 97% error-free ratio
on packing records. Completed a certificate in Warehouse Sanitation and
has a valid commercial driver’s license.
            </Text>
          </View>

          {/* Skill Section  */}
          <View >
            <Text  style={[styles.header2,styles.centerText,styles.marginTop20]}>
              Skills
            </Text>
            <View> 
            <Svg height="5" width="495">
              <Line x1="0" y1="5" x2="500" y2="5" strokeWidth={2} stroke="rgb(0,0,0)" />
            </Svg>
            </View>
            <View style={[styles.dFlex,styles.marginTop10]}>            
              <Text  style={styles.colorGrey} >Business: </Text>  
              <Text>Cleaning Equipment- Mathematics - Deep Sanitation Practices - Business Statergy  </Text>
            </View>
            <View style={[styles.dFlex,styles.marginTop10]}>            
              <Text  style={styles.colorGrey} >Driving license: </Text>  
              <Text> Full  </Text>
            </View>           
          </View>

          {/* Experience Section  */}
          <View >
            <Text  style={[styles.header2,styles.centerText,styles.marginTop20]}>
              Experience 
            </Text>

            <View> 
            <Svg height="5" width="495">
              <Line x1="0" y1="5" x2="500" y2="5" strokeWidth={2} stroke="rgb(0,0,0)" />
            </Svg>
            </View>

              <View style={styles.marginTop10}>      
                <View style={[styles.dFlexSB,styles.marginTop3]} > 
                  <Text  style={styles.colorGrey} > Amazon </Text>  
                  <Text  style={styles.colorGrey} >  Details, Tx </Text>  
                </View>     
                <View style={[styles.dFlexSB,styles.marginTop3]} >            
                  <Text> Amazon Warehouse Associate </Text>
                  <Text  style={styles.colorGrey} >   2019 - Ongoing </Text>  
                </View>
                <View style={[styles.colorGrey,styles.marginTop6 ]} >  
                  <Text>1. Consistently maintained picking/packing speeds in the 98th percentile.  </Text>
                  <Text>2. Picked all orders with 100% accuracy despite high speeds.</Text>
                  <Text>3. Maintained a clean work area, meeting 97.5% of the inspection requirements.   </Text>
                </View>
              </View>

              <View style={styles.marginTop10}>      
                    
                <View style={[styles.dFlexSB,styles.marginTop3]} >            
                  <Text> Laboratory Inventory Assistant   </Text>
                  <Text  style={styles.colorGrey} >   2017 - 2019 </Text>  
                </View>
                <View style={[styles.colorGrey,styles.marginTop6 ]} >  
                  <Text>1. Filled the warehouse helper job description, which involved picking, packing, shipping, inventory management, and cleaning equipment.</Text>
                  <Text>2. Saved 12% on UPS orders by staying on top of special deals. </Text>
                  <Text>3. Cut down storage waste by 23% by switching to a Kanban system.</Text>
                </View>
              </View>

              <View style={styles.marginTop10}>      
                <View style={[styles.dFlexSB,styles.marginTop3]} > 
                  <Text  style={styles.colorGrey} >  Lauzon  </Text>  
                  <Text  style={styles.colorGrey} >  Details, Tx </Text>  
                </View>     
                <View style={[styles.dFlexSB,styles.marginTop3]} >            
                  <Text>  Business Analyst   </Text>
                  <Text  style={styles.colorGrey} >  2013 - 2017 </Text>  
                </View>
                <View style={[styles.colorGrey,styles.marginTop6 ]} >  
                  <Text>1. It is a long established fact that a reader will be distracted by the readable content of a page   </Text>
                  <Text>2. long established fact that a reader will be distracted by the readable content of a page   </Text>
                  <Text>3. reader will be distracted by the readable content of a page   </Text>
                </View>
              </View>
             
   
          </View>

          {/* Education Section  */}
          <View >
            <Text  style={[styles.header2,styles.centerText,styles.marginTop20]}>
              Education 
            </Text>

            <View> 
            <Svg height="5" width="495">
              <Line x1="0" y1="5" x2="500" y2="5" strokeWidth={2} stroke="rgb(0,0,0)" />
            </Svg>
            </View>

              <View style={styles.marginTop10}>      
                <View style={[styles.dFlexSB,styles.marginTop3]} > 
                  <Text  style={styles.colorGrey} > University of Wisconsin </Text>  
                  <Text  style={styles.colorGrey} > Wisconsin </Text>  
                </View>     
                <View style={[styles.dFlexSB,styles.marginTop3]} >            
                  <Text>  M.Sc in Finance  </Text>
                  <Text  style={styles.colorGrey} >  2012 - 2013 </Text>  
                </View>                
              </View> 

              <View style={styles.marginTop10}>     
              <View style={[styles.dFlexSB,styles.marginTop3]} > 
                  <Text  style={styles.colorGrey} > University of Wisconsin </Text>  
                  <Text  style={styles.colorGrey} > Wisconsin </Text>  
                </View>                       
                <View style={[styles.dFlexSB,styles.marginTop3]} >            
                  <Text>  BBA: Business, Supply Chain Management    </Text>
                  <Text  style={styles.colorGrey} >   2008 - 2012 </Text>  
                </View>
                
              </View>
 
             
   
          </View>

           {/* Course Section  */}
           <View >
            <Text  style={[styles.header2,styles.centerText,styles.marginTop20]}>
              Course & Certificate
            </Text>

            <View> 
            <Svg height="5" width="495">
              <Line x1="0" y1="5" x2="500" y2="5" strokeWidth={2} stroke="rgb(0,0,0)" />
            </Svg>
            </View>

            <View style={styles.marginTop10}>      
              <View style={[styles.dFlex,styles.marginTop6]} > 
                <Text  style={styles.colorGrey} >  PMI Professional  in Business Analysis (PBA) </Text>   
                <Text>---- PMI </Text>                
                <Text  style={styles.colorGrey} >, 2019 </Text>                  
              </View> 
              <View style={[styles.dFlex,styles.marginTop6]} > 
                <Text  style={styles.colorGrey} >  Certified Associate in Project Management (CAPM) </Text>   
                <Text>---- PMI </Text>                
                <Text  style={styles.colorGrey} >, 2018 </Text>                  
              </View> 
              <View style={[styles.dFlex,styles.marginTop6]} > 
                <Text  style={styles.colorGrey} >  High Dimensional Data Analysis  </Text>   
                <Text>---- Harvard </Text>                
                <Text  style={styles.colorGrey} >, 2017 </Text>                  
              </View>                                       
            </View>    
          </View>

           {/* Interest & Hobbies Section  */}
           <View >
            <Text  style={[styles.header2,styles.centerText,styles.marginTop20]}>
              Interest & Hobbies
            </Text>

            <View> 
            <Svg height="5" width="495">
              <Line x1="0" y1="5" x2="500" y2="5" strokeWidth={2} stroke="rgb(0,0,0)" />
            </Svg>
            </View>

            <View style={styles.marginTop10}>      
              <View style={[styles.dFlexSA,styles.marginTop6]} > 
                <View style={styles.dFlexC}>
                  <Text>Giving Back To My Community </Text>
                  <Text style={[styles.colorGrey,styles.width70]}>it look like readable English. Various versions have evolved over the years, </Text>
                </View>
                <View style={styles.dFlexC}>
                  <Text> Horse - Riding  </Text>
                  <Text style={[styles.colorGrey,styles.width70]}> Various versions have evolved over the years, </Text>
                </View>
                <View style={styles.dFlexC}>
                  <Text> Developing My Team</Text>
                  <Text style={[styles.colorGrey,styles.width70]}> as opposed to using 'Content here, content here', </Text>
                </View>
              </View>                                                     
            </View>    
          </View>
            
         
          <View>
            {/* <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            /> */}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
export default PdfBill;