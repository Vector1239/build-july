import React from 'react'

const trash = () => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ marginTop: '1px', marginRight: '4px' }}>
                    <label style={{ color: 'offWhite', marginTop: '4px', fontSize: 'xs' }}>Platform</label>
                    <FormControl style={{ width: '200px', marginTop: '3px', marginLeft: '-7px' }}>
                        {/* Select component code */}
                    </FormControl>
                </div>
                <div style={{ marginTop: '1px', marginRight: '4px' }}>
                    <label style={{ color: 'offWhite', marginTop: '4px', fontSize: 'xs' }}>Location</label>
                    <FormControl style={{ width: '200px', marginTop: '3px', marginLeft: '-7px' }}>
                        {/* Select component code */}
                    </FormControl>
                </div>
                <div style={{ marginTop: '1px', marginRight: '5px' }}>
                    <label style={{ color: 'offWhite', marginTop: '4px', fontSize: 'xs' }}>Gender</label>
                    <FormControl style={{ width: '200px', marginTop: '3px', marginLeft: '-6px' }}>
                        {/* Select component code */}
                    </FormControl>
                </div>
                <div style={{ marginLeft: 'auto', marginTop: '4px' }}>
                    <FilterDropdown />
                </div>
            </div>
            <div>
                <div style={{ display: '' }}>
                    <Button style={{ textTransform: 'none', fontFamily: 'Montserrat', borderRadius: '4px' }}>
                        Submit
                    </Button>
                </div>
            </div>
        </div >
            <div style={{ display: 'flex' }}>
                <SearchTable filterStatus={'all'} />
                {/* {showList ? <CreateList onBack={handleBack} plan={JSON.stringify(plan)} /> : <CreatePlan onClick={handleClick} />} */}
            </div>

    </>
  )
}

export default trash