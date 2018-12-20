import React, { Component } from 'react';
import { Input, Col, Chip, Tabs, Tab } from 'react-materialize';
import './Modal.css';
import Button from 'react-materialize/lib/Button';

export default class TaskDetailsModal extends Component {
  render() {
    let sql =`select distinct
       a.nl as "NL",
       d.ekg as "EKG",
       b.hkdnr as "Kd.-Nr.",
       e.name1 as "Name1",
       e.name2 as "Name2",
       e.strasse as "Strasse",
       e.plz as "PLZ",
       e.ort as "Ort",
       e.liefname1 as "LiefName1",
       e.liefname2 as "LiefName2",
       e.liefstrasse as "LiefStrasse",
       e.liefplz as "LiefPLZ",
       e.liefort as "LiefOrt",
       sum(case when (c.ekhwg in (100, 200)) then a.gumsatz else 0 end) as "FF",
       sum(case when (a.pfk = 34) then a.gumsatz else 0 end) as "Tchibo",
       sum(case when (c.ekhwg in (7200, 7300, 7600)) then a.gumsatz else 0 end) as "GKT",
       sum(case when (c.ekhwg = 5300) then a.gumsatz else 0 end) as "Tabak",
       sum(case when (c.ekhwg = 9400) then a.gumsatz else 0 end) as "Strecke",       
       sum(case when (c.ekhwg = 3000) then a.gumsatz else 0 end) as "Obst + Gemüse",
       sum(case when (c.ekhwg  not in (100, 200, 3000, 5300, 7200, 7300, 7600, 9400)) and (a.pfk not in 34) then a.gumsatz else 0 end) as "Restumsatz"
from gvp2_basis.fakturierdaten a
join gvp2_basis.kundenstamm_statistik b on a.kdnr = b.kdnr
join gvp2_basis.artikelstamm_zusatz_statistik c on a.artnr = c.artnr
left outer join gvp2_basis.kdekgzuordnung_statistik d on a.kdnr = d.kdnr
join (select hkdnr,
             name1,
             name2,
             strasse,
             plz,
             ort,
             liefname1,
             liefname2,
             liefstrasse,
             liefplz,
             liefort
       from gvp2_basis.kundenstamm_statistik where isthkdnr = 'j') e on b.hkdnr = e.hkdnr      
where (d.typkz = 'M' or b.hkdnr in (12007860, 10435052, 08006797))
      and b.admnr not in (91, 95, 96)
      and a.cckz = 'G'
      and a.nl in (8, 10, 11, 12, 13, 14, 50, 51)
      and c.ekhwg <> 9800
      and c.laenderkz = 'DE'
      and a.datekey between 20180701 and 20180731
      and (d.ekg in (99000459, 99000456) or b.hkdnr in (12007860, 10435052, 08006797))
group by a.nl, d.ekg, b.hkdnr, e.name1, e.name2, 
         e.strasse, e.plz, e.ort, e.liefname1, e.liefname2, 
         e.liefstrasse, e.liefplz, e.liefort

order by a.nl, b.hkdnr
    `;
    return (
      <div>
        <Tabs className='tab z-depth-0'>
            <Tab title="Detils" active>
            <br></br>
                    <Input s={3} label="Status Changed By" defaultValue="Mohamed" disabled />
                    <Input s={3} label="Status Changed at" defaultValue="20.12.2018 14:00" disabled />
                    <Input s={10} label="Notices" type='text' />
                    <Col s={12}>
                        <Chip>
                            <img src={require('../../me.png')} alt='Contact Person' />
                            task must be configured
                        </Chip>
                        <Chip>
                            <img src={require('../../arndt.png')} alt='Contact Person' />
                            task was configured
                        </Chip>
                    </Col>
            </Tab>
            <Tab title="Sql">
                <div id="sqltab">
                    <Input id='sqltext' s={10} type='textarea' disabled defaultValue={sql}/>
                    <Button id='sqlcopy'>copy</Button>
                </div>
            </Tab>
        </Tabs>
        
      </div>
    )
  }
}
